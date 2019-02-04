import React from 'react'
import { connect } from 'react-redux'

class DestinationPeopleCard extends React.Component {

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
        // console.log("DestinationPeopleCard: clicked", event.target.getAttribute("name"))
        const clickedButton = event.target.getAttribute("name")
        // switch (this.props.activeView) {
        //     case "People Who Visited":
                // Click View Page Button
                clickedButton === "View Page" ? this.getOtherUser() : console.log("Oh no!")
        //         break;
        //     case "People Who Saved":
        //         // Click View Page Button
        //         clickedButton === "View Page" ? this.getOtherUser() : console.log("Oh no!")
        //         break;
        //     default:
        //         console.log("Oh no!")
        //         break;
        // }
    }

    getOtherUser = () => {
        // console.log("DestinationPeopleCard: getOtherUser => ")

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
        // console.log("DestinationPeopleCard: this.props => ", this.props)

        let button1
        // let button2
        let image_url
        let content_header
        let content_meta

        // switch (this.props.activeView) {
        //     case "People Who Visited":
                button1 = "View Page"
                image_url = this.props.item.avatar_url
                content_header = this.props.item.username
                content_meta = ""
        //         break;
        //     case "People Who Saved":
        //         button1 = "View Page"
        //         image_url = this.props.item.avatar_url
        //         content_header = this.props.item.username
        //         content_meta = ""
        //         break;
        //     default:
        //         console.log("Oh no!")
        //         break;
        // }

        return (
            <div className="card">
                <div className="blurring dimmable image">
                    <div className="ui dimmer" onMouseLeave={this.onMouseLeaveCard} >
                        <div className="content">
                            <div className="center">
                                <div className="ui inverted button" name={button1} onClick={this.onClickButton} >{button1}</div>
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
        setOtherUser: data => dispatch({ type: 'SET_OTHER_USER', data })
    }
}

export default connect(null, mapDispatchToProps)(DestinationPeopleCard)