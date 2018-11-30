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
            // case "Visited":
            //     // Click Save or Delete Button
            //     clickedButton === "Save" ? this.patchUserDestination(false) : this.deleteUserDestination("Visited")
            //     break;
            // case "Saved":
            //     // Click Visited or Delete Button
            //     clickedButton === "Visited" ? this.patchUserDestination(true) : this.deleteUserDestination("Saved")
            //     break;
            // case "Explore Destinations":
            //     // Click Visited Button or Saved Button
            //     clickedButton === "Visited" ? this.postUserDestination(true) : this.postUserDestination(false)
            //     break;
            case "Followers":
                // Click View Page or Block
                clickedButton === "View Page" ? this.getOtherUser() : console.log("Oh no!")
                break
            case "Following":
                // Click View Page or Unfollow
                clickedButton === "View Page" ? this.getOtherUser() : console.log("Oh no!")
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

    render() {
        // console.log("OtherUserDestinationCard: this.props => ", this.props)

        let button1
        let button2
        let image_url
        let content_header
        let content_meta

        switch (this.props.activeView) {
            case "Visited":
                button1 = "View Page"
                button2 = "Save or Visited"
                image_url = `/destinations/${this.props.item.city.toLowerCase().replace(/ /g, "")}.jpg`
                content_header = this.props.item.city
                content_meta = this.props.item.country
                break;
            case "Saved":
                button1 = "View Page"
                button2 = "Save or Visited"
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
                button2 = "Follow or Unfollow"
                image_url = `/users/dog${this.props.item.id.toString().slice(-1)}.jpg`
                content_header = this.props.item.username
                content_meta = ""
                break
            case "Following":
                button1 = "View Page"
                button2 = "Follow or Unfollow"
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
                                <div className="ui inverted button" id="button1" name={button1} onClick={this.onClickButton} >{button1}</div>
                                <div className="ui inverted button" id="button2" name={button2} onClick={this.onClickButton} >{button2}</div>
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
//         addVisitedDestination: destination => dispatch({ type: 'ADD_VISITED_DESTINATION', destination }),
//         addSavedDestination: destination => dispatch({ type: 'ADD_SAVED_DESTINATION', destination }),
//         deleteFromVisitedDestinations: destination => dispatch({ type: 'DELETE_FROM_VISITED_DESTINATIONS', destination }),
//         deleteFromSavedDestinations: destination => dispatch({ type: 'DELETE_FROM_SAVED_DESTINATIONS', destination }),
//         patchFromVisitedDestinations: destination => dispatch({ type: 'PATCH_FROM_VISITED_DESTINATIONS', destination }),
//         patchFromSavedDestinations: destination => dispatch({ type: 'PATCH_FROM_SAVED_DESTINATIONS', destination }),
//         addFollowing: user => dispatch({ type: 'ADD_FOLLOWING', user }),
//         deleteFromFollowing: user => dispatch({ type: 'DELETE_FROM_FOLLOWING', user }),
//         deleteFromFollowers: user => dispatch({ type: 'DELETE_FROM_FOLLOWERS', user }),
        setOtherUser: data => dispatch({ type: 'SET_OTHER_USER', data })
    }
}

export default connect(null, mapDispatchToProps)(OtherUserDestinationCard)