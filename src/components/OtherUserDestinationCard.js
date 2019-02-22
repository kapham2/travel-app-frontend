import React from 'react'
import { connect } from 'react-redux'

class OtherUserDestinationCard extends React.Component {

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
        // console.log("OtherUserDestinationCard: clicked", event.target.getAttribute("name"))
        const clickedButton = event.target.getAttribute("name")
        switch (this.props.activeView) {
            case "Visited":
                // Click View Page or Remove Button
                if (clickedButton === "View Page") {
                    // console.log("this.props => ", this.props)
                    this.props.setActiveView("Destination")
                }
                clickedButton === "View Page" ? this.getDestination() : this.deleteUserDestination("Visited")
                break;
            // case "Saved":
            //     // Click View Page Button
            //     clickedButton === "View Page" ? this.getDestination() : this.deleteUserDestination("Saved")
            //     break;
            // case "Explore Destinations":
            //     // Click Visited Button or Saved Button
            //     clickedButton === "Visited" ? this.postUserDestination(true) : this.postUserDestination(false)
            //     break;
            case "Followers":
                // Click View Page or Unfollow/Follow Button
                clickedButton === "View Page" ? this.getOtherUser() : (clickedButton === "Unfollow" ? this.deleteFollow("Following") : this.postFollow())
                break
            case "Following":
                // Click View Page or Unfollow/Follow Button
                clickedButton === "View Page" ? this.getOtherUser() : (clickedButton === "Unfollow" ? this.deleteFollow("Following") : this.postFollow())
                break
            // case "Explore Users":
            //     // Click View Page Button or Follow Button
            //     clickedButton === "Follow" ? this.postFollow() : this.getOtherUser()
            //     break;

            case "Destination":
                // Click View Page Button
                if (clickedButton === "View Page") {
                    // console.log("this.props => ", this.props)
                    this.props.setActiveView("Visited")
                }
                clickedButton === "View Page" ? this.getOtherUser() : (clickedButton === "Unfollow" ? this.deleteFollow("Following") : this.postFollow())
                break;

            case "Explore Cities":
                // Click View Page Button or Visited Button
                if (clickedButton === "View Page") {
                    // console.log("this.props => ", this.props)
                    this.props.setActiveView("Destination")
                }
                clickedButton === "View Page" ? this.getDestination() : this.postUserDestination(true)
                break;

            case "Explore People":
                // Click View Page Button or Follow Button
                if (clickedButton === "View Page") {
                    // console.log("this.props => ", this.props)
                    this.props.setActiveView("Visited")
                }
                clickedButton === "View Page" ? this.getOtherUser() : this.postFollow()
                break;

            default:
                console.log("Oh no!")
                break;
        }
    }

    postUserDestination = (visited) => {
        // console.log("ExplorePlacesPeopleCard: postUserDestination => ")
        fetch('http://localhost:3333/api/v1/user_destinations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                user_id: this.props.user.id,
                destination_id: this.props.item.id,
                visited: visited
            })
        })
        .then(response => response.json())
        .then(response => this.props.addUserDestination(response))
        
        if (visited) {
            this.props.addVisitedDestination(this.props.item)
        }
        else {
            this.props.addSavedDestination(this.props.item)
        }
    }

    deleteUserDestination = (fromTab) => {
        // console.log("OtherUserDestinationCard: deleteUserDestination => ")
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
    }

    postFollow = () => {
        // console.log("OtherUserDestinationCard: postFollow => ")
        // console.log(this.props.user, this.props.user.id)
        // console.log(this.props.item, this.props.item.id)
        fetch('http://localhost:3333/api/v1/follows', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                follower_id: this.props.user.id,
                following_id: this.props.item.id,
            })
        })
        .then(response => response.json())
        .then(response => this.props.addFollow(response))
        
        this.props.addFollowing(this.props.item)

        if (this.props.user.id === this.props.other_user.id) {
            this.props.addOtherFollowing(this.props.item)
        }
    }

    deleteFollow = (fromTab) => {
        // console.log("OtherUserDestinationCard: deleteFollow => ")
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
            
            if (this.props.user.id === this.props.other_user.id) {
                this.props.deleteFromOtherFollowing(this.props.item)
            }
        }
    }

    getOtherUser = () => {
        // console.log("OtherUserDestinationCard: getOtherUser => ")

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

    getDestination = () => {
        // console.log("OtherUserDestinationCard: getDestination => ")

        fetch(`http://localhost:3333/api/v1/destinations/${this.props.item.id}`, {
            headers: { 'Authorization' : `Bearer ${localStorage.getItem("token")}` }
        })
        .then(response => response.json())
        .then(response => {
            // console.log("fetch response:", response)
            this.props.setDestination(response)
            this.props.history.push(`/places/${response.destination.city.toLowerCase().replace(/\s+/g, '-')}`)
        })
    }

    render() {
        // console.log("OtherUserDestinationCard: this.props => ", this.props)

        let button1
        let button2
        let image_url
        let content_header
        let content_meta
        let found

        switch (this.props.activeView) {
            case "Visited":
                button1 = "View Page"
                button2 = "Remove"
                image_url = `/destinations/${this.props.item.city.toLowerCase().replace(/ /g, "")}.jpg`
                content_header = this.props.item.city
                content_meta = this.props.item.country
                break;
            // case "Saved":
            //     button1 = "View Page"
            //     // button2 = "Save or Visited"
            //     image_url = `/destinations/${this.props.item.city.toLowerCase().replace(/ /g, "")}.jpg`
            //     content_header = this.props.item.city
            //     content_meta = this.props.item.country
            //     break;
            // case "Explore Destinations":
            //     button1 = "Visited"
            //     button2 = "Save"
            //     image_url = `/destinations/${this.props.item.city.toLowerCase().replace(/ /g, "")}.jpg`
            //     content_header = this.props.item.city
            //     content_meta = this.props.item.country
            //     break;
            case "Followers":
                button1 = "View Page"
                found = this.props.user_following.find((following) => {
                    return following.id ===this.props.item.id
                })
                button2 = found ? "Unfollow" : "Follow"
                image_url = this.props.item.avatar_url
                content_header = this.props.item.username
                content_meta = ""
                break
            case "Following":
                button1 = "View Page"
                found = this.props.user_following.find((following) => {
                    return following.id ===this.props.item.id
                })
                button2 = found ? "Unfollow" : "Follow"
                image_url = this.props.item.avatar_url
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

            case "Destination":
                button1 = "View Page"
                found = this.props.user_following.find((following) => {
                    return following.id ===this.props.item.id
                })
                button2 = found ? "Unfollow" : "Follow"
                image_url = this.props.item.avatar_url
                content_header = this.props.item.username
                content_meta = ""
                break;

            case "Explore Cities":
                button1 = "View Page"
                button2 = "Visited"
                image_url = `/destinations/${this.props.item.city.toLowerCase().replace(/ /g, "")}.jpg`
                content_header = this.props.item.city
                content_meta = this.props.item.country
                break;

            case "Explore People":
                button1 = "View Page"
                button2 = "Follow"
                image_url = this.props.item.avatar_url
                content_header = this.props.item.username
                content_meta = ""
                break;

            default:
                console.log("Oh no!")
                break;
        }

        return (
            <div className="card">
                <div className="blurring dimmable image">
                    <div className="ui dimmer" onMouseLeave={this.onMouseLeaveCard} >
                        <div className="content">
                            {/* <div id="border-height">
                                <h3><strong>{content_header}, {content_meta}</strong></h3>
                                <p>
                                    {"350 characters max blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post blog post"}
                                </p>
                            </div>
                            <br /> */}
                            <div className="center">
                                <div className="ui inverted button" id="button1" name={button1} onClick={this.onClickButton} >{button1}</div>
                                <div className="ui inverted button" id="button2" name={button2} onClick={this.onClickButton} >{button2}</div>
                            </div>
                        </div>
                    </div>
                    <img className="card-image" src={process.env.PUBLIC_URL + image_url} alt="" onMouseOver={this.onMouseOverCard}/>
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
        addVisitedDestination: destination => dispatch({ type: 'ADD_VISITED_DESTINATION', destination }),
//         addSavedDestination: destination => dispatch({ type: 'ADD_SAVED_DESTINATION', destination }),
        deleteFromVisitedDestinations: destination => dispatch({ type: 'DELETE_FROM_VISITED_DESTINATIONS', destination }),
//         deleteFromSavedDestinations: destination => dispatch({ type: 'DELETE_FROM_SAVED_DESTINATIONS', destination }),
//         patchFromVisitedDestinations: destination => dispatch({ type: 'PATCH_FROM_VISITED_DESTINATIONS', destination }),
//         patchFromSavedDestinations: destination => dispatch({ type: 'PATCH_FROM_SAVED_DESTINATIONS', destination }),
        addFollowing: user => dispatch({ type: 'ADD_FOLLOWING', user }),
        addOtherFollowing: user => dispatch({ type: 'ADD_OTHER_FOLLOWING', user }),
        deleteFromFollowing: user => dispatch({ type: 'DELETE_FROM_FOLLOWING', user }),
        deleteFromOtherFollowing: user => dispatch({ type: 'DELETE_FROM_OTHER_FOLLOWING', user}),
//         deleteFromFollowers: user => dispatch({ type: 'DELETE_FROM_FOLLOWERS', user }),
        setOtherUser: data => dispatch({ type: 'SET_OTHER_USER', data }),
        addUserDestination: data => dispatch({ type: 'ADD_USER_DESTINATION', data }),
        deleteFromUserDestinations: userDestination => dispatch({ type: 'DELETE_FROM_USER_DESTINATIONS', userDestination }),
        deleteFromFollows: follow => dispatch({ type: 'DELETE_FROM_FOLLOWS', follow }),
        addFollow: data => dispatch({ type: 'ADD_FOLLOW', data }),
        setDestination: data => dispatch({ type: 'SET_DESTINATION', data})
    }
}

export default connect(null, mapDispatchToProps)(OtherUserDestinationCard)