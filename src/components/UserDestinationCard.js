import React from 'react'
import { connect } from 'react-redux'

class UserDestinationCard extends React.Component {

    onMouseOverCard = (e) => {
        if (this.props.activeView !== "Home") {
            e.target.previousSibling.classList.add("active")
        }
    }

    onMouseLeaveCard = (e) => {
        if (this.props.activeView !== "Home") {
            e.target.classList.remove("active")
        }
    }

    onClickButton = (event) => {
        // console.log("UserDestinationCard: clicked", event.target.getAttribute("name"))
        const clickedButton = event.target.getAttribute("name")
        switch (this.props.activeView) {
            case "Visited":
                // Click Save or Delete Button
                clickedButton === "Save" ? this.patchUserDestination(false) : this.deleteUserDestination("Visited")
                break;
            case "Saved":
                // Click Visited or Delete Button
                clickedButton === "Visited" ? this.patchUserDestination(true) : this.deleteUserDestination("Saved")
                break;
            // case "Explore Destinations":
            //     // Click Visited Button or Saved Button
            //     clickedButton === "Visited" ? this.postUserDestination(true) : this.postUserDestination(false)
            //     break;
            case "Followers":
                // Click View Page or Block
                clickedButton === "Block" ? this.deleteFollow("Followers") : this.getOtherUser()
                break
            case "Following":
                // Click View Page or Unfollow
                clickedButton === "Unfollow" ? this.deleteFollow("Following") : this.getOtherUser()
                break
            // case "Explore Users":
            //     // Click View Page Button or Follow Button
            //     clickedButton === "Follow" ? this.postFollow() : this.getOtherUser()
            //     break;
            default:
                console.log("Oh no!")
                break;
        }
    }

    // postUserDestination = (visited) => {
    //     // console.log("UserDestinationCard: postUserDestination => ")
    //     fetch('http://localhost:3333/api/v1/user_destinations', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization' : `Bearer ${localStorage.getItem("token")}`
    //         },
    //         body: JSON.stringify({
    //             user_id: this.props.user.id,
    //             destination_id: this.props.item.id,
    //             visited: visited
    //         })
    //     })
        
    //     if (visited) {
    //         this.props.addVisitedDestination(this.props.item)
    //     }
    //     else {
    //         this.props.addSavedDestination(this.props.item)
    //     }
    // }

    deleteUserDestination = (fromTab) => {
        // console.log("UserDestinationCard: deleteUserDestination => ")
        const userDestination = this.props.user_destinations.find(user_destination => user_destination.user_id === this.props.user.id && user_destination.destination_id === this.props.item.id)
        fetch(`http://localhost:3333/api/v1/user_destinations/${userDestination.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem("token")}`
            }
        })

        this.props.deleteFromUserDestinations(userDestination)

        if (fromTab === "Visited") {
            this.props.deleteFromVisitedDestinations(this.props.item)
        }
        // fromTab === "Saved"
        else {
            this.props.deleteFromSavedDestinations(this.props.item)
        }
    }

    patchUserDestination = (visited) => {
        // console.log("UserDestinationCard: patchUserDestination => ")
        const userDestination = this.props.user_destinations.find(user_destination => user_destination.user_id === this.props.user.id && user_destination.destination_id === this.props.item.id)
        fetch(`http://localhost:3333/api/v1/user_destinations/${userDestination.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ visited: visited })
        })

        this.props.updateUserDestinations(userDestination)

        // if fromTab = "Visited" => visited = false
        if (!visited) {
            this.props.patchFromVisitedDestinations(this.props.item)
        }
        else {
            this.props.patchFromSavedDestinations(this.props.item)
        }

    }

    // postFollow = () => {
    //     // console.log("UserDestinationCard: postFollow => ")
    //     // console.log(this.props.user, this.props.user.id)
    //     // console.log(this.props.item, this.props.item.id)
    //     fetch('http://localhost:3333/api/v1/follows', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization' : `Bearer ${localStorage.getItem("token")}`
    //         },
    //         body: JSON.stringify({
    //             follower_id: this.props.user.id,
    //             following_id: this.props.item.id,
    //         })
    //     })
        
    //     this.props.addFollowing(this.props.item)
    // }

    deleteFollow = (fromTab) => {
        // console.log("UserDestinationCard: deleteFollow => ")
        // fromTab Following or "Follower"
        const follower_id = fromTab === "Following" ? this.props.user.id : this.props.item.id
        const following_id = fromTab === "Following" ? this.props.item.id : this.props.user.id
        const follow = this.props.follows.find(follow => follow.follower_id === follower_id && follow.following_id === following_id)
        fetch(`http://localhost:3333/api/v1/follows/${follow.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem("token")}`
            }
        })

        this.props.deleteFromFollows(follow)

        if (fromTab === "Following") {
            this.props.deleteFromFollowing(this.props.item)
        }
        // fromTab === "Followers"
        else {
            this.props.deleteFromFollowers(this.props.item)
        }
    }

    getOtherUser = () => {
        // console.log("UserDestinationCard: getOtherUser => ")

        fetch(`http://localhost:3333/api/v1/other-users/${this.props.item.id}`, {
            headers: { 'Authorization' : `Bearer ${localStorage.getItem("token")}` }
        })
        .then(response => response.json())
        .then(response => {
            // console.log("fetch response:", response)
            this.props.setOtherUser(response)
            this.props.history.push(`/${response.user.username}`)
        })

    }

    render() {
        // console.log("UserDestinationCard: this.props => ", this.props)

        let button1
        let button2
        let image_url
        let content_header
        let content_meta

        switch (this.props.activeView) {
            case "Visited":
                button1 = "Save"
                button2 = "Delete"
                image_url = `/destinations/${this.props.item.city.toLowerCase().replace(/ /g, "")}.jpg`
                content_header = this.props.item.city
                content_meta = this.props.item.country
                break;
            case "Saved":
                button1 = "Visited"
                button2 = "Delete"
                image_url = `/destinations/${this.props.item.city.toLowerCase().replace(/ /g, "")}.jpg`
                content_header = this.props.item.city
                content_meta = this.props.item.country
                break;
            // case "Explore Destinations":
            //     button1 = "Visited"
            //     button2 = "Save"
            //     image_url = `/destinations/${this.props.item.city.toLowerCase().replace(/ /g, "")}.jpg`
            //     content_header = this.props.item.city
            //     content_meta = this.props.item.country
            //     break;
            case "Followers":
                button1 = "View Page"
                button2 = "Block"
                image_url = `/users/dog${this.props.item.id.toString().slice(-1)}.jpg`
                content_header = this.props.item.username
                content_meta = ""
                break
            case "Following":
                button1 = "View Page"
                button2 = "Unfollow"
                image_url = `/users/dog${this.props.item.id.toString().slice(-1)}.jpg`
                content_header = this.props.item.username
                content_meta = ""
                break
            // case "Explore Users":
            //     button1 = "View Page"
            //     button2 = "Follow"
            //     image_url = `/users/dog${this.props.item.id.toString().slice(-1)}.jpg`
            //     content_header = this.props.item.username
            //     content_meta = ""
            //     break;
            default:
                console.log("Oh no!")
                break;
        }

        return (
            <div className="card">
                <div className="blurring dimmable image">
                    <div className="ui dimmer" onMouseLeave={this.onMouseLeaveCard} >
                        <div className="content">
                            <div className="center">
                                <div className="ui inverted button" name={button1} onClick={this.onClickButton} >{button1}</div>
                                <div className="ui inverted button" name={button2} onClick={this.onClickButton} >{button2}</div>
                            </div>
                        </div>
                    </div>
                    <img className="card-image" src={image_url} alt="" onMouseOver={this.onMouseOverCard}/>
                </div>

                <div className="content">
                    <div className="header">{content_header}</div>
                    <div className="meta">{content_meta}</div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // addVisitedDestination: destination => dispatch({ type: 'ADD_VISITED_DESTINATION', destination }),
        // addSavedDestination: destination => dispatch({ type: 'ADD_SAVED_DESTINATION', destination }),
        deleteFromVisitedDestinations: destination => dispatch({ type: 'DELETE_FROM_VISITED_DESTINATIONS', destination }),
        deleteFromSavedDestinations: destination => dispatch({ type: 'DELETE_FROM_SAVED_DESTINATIONS', destination }),
        patchFromVisitedDestinations: destination => dispatch({ type: 'PATCH_FROM_VISITED_DESTINATIONS', destination }),
        patchFromSavedDestinations: destination => dispatch({ type: 'PATCH_FROM_SAVED_DESTINATIONS', destination }),
        // addFollowing: user => dispatch({ type: 'ADD_FOLLOWING', user }),
        deleteFromFollowing: user => dispatch({ type: 'DELETE_FROM_FOLLOWING', user }),
        deleteFromFollowers: user => dispatch({ type: 'DELETE_FROM_FOLLOWERS', user }),
        setOtherUser: data => dispatch({ type: 'SET_OTHER_USER', data }),
        deleteFromUserDestinations: userDestination => dispatch({ type: 'DELETE_FROM_USER_DESTINATIONS', userDestination }),
        deleteFromFollows: follow => dispatch({ type: 'DELETE_FROM_FOLLOWS', follow }),
        updateUserDestinations : userDestination => dispatch({ type: 'UPDATE_USER_DESTINATIONS', userDestination })
    }
}

export default connect(null, mapDispatchToProps)(UserDestinationCard)