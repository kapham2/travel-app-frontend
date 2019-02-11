import React from 'react'
import UserCardModalUploadAvatar from './UserCardModalUploadAvatar'

class OtherUserCard extends React.Component {

    onClickMenu = (event) => {
        // console.log("OtherUserCard: clicked", event.target.getAttribute('name'))
        this.props.setActiveView(event.target.getAttribute('name'))
    }

    onMouseOverAvatar = (e) => {
        if (this.props.user.id === this.props.other_user.id) {
            e.target.previousSibling.classList.add("active")
        }
    }

    onMouseLeaveAvatar = (e) => {
        if (this.props.user.id === this.props.other_user.id) {
            e.target.classList.remove("active")
        }
    }
    
    onClickUpdateButton = (e) => {
        document.querySelector('div[name="modal-upload-avatar"]').classList.add("active")
    }

    render() {
        // console.log("OtherUserCard: this.props => ", this.props)

        let img_url
        let header_text
        let meta_text

        if (this.props.activeView === "Explore Cities") {
            img_url = <img src="/helloworldsquare.jpg" alt="" />
            header_text = <p className="header">Explore Cities</p>
            meta_text = <div className="meta"><span><strong>{this.props.more_destinations.length}</strong> cities</span></div>
        }
        else if (this.props.activeView === "Explore People") {
            img_url = <img src="/helloworldsquare.jpg" alt="" />
            header_text = <p className="header">Explore People</p>
            meta_text = <div className="meta"><span><strong>{this.props.more_users.length}</strong> people</span></div>
        }
        else if (this.props.activeView === "Destination") {
            img_url = <img src={this.props.photo_url} alt="" />
            header_text = <p className="header">{this.props.destination.city}, {this.props.destination.country}</p>
            meta_text = <div className="meta"><span><strong>{this.props.users_visited.length}</strong> visited</span></div>
        }
        else {
            img_url = <img src={this.props.other_avatar_url} alt="" onMouseOver={this.onMouseOverAvatar} />
            header_text = <p className="header">{this.props.other_user.username}</p>
            meta_text = <div className="meta"><span className="cursor-pointer" name="Visited" onClick={this.onClickMenu}><strong name="Visited">{this.props.other_user_visited_destinations.length}</strong> cities</span> · <span className="cursor-pointer" name="Followers" onClick={this.onClickMenu}><strong name="Followers">{this.props.other_user_followers.length}</strong> followers</span> · <span className="cursor-pointer" name="Following" onClick={this.onClickMenu}><strong name="Following">{this.props.other_user_following.length}</strong> following</span></div>
        }

        return (
            <div className="ui text container">
                <div className="ui very relaxed unstackable items">
                    <div className="item">

                        <div className="ui small circular blurring dimmable image">
                            <div className="ui dimmer" onMouseLeave={this.onMouseLeaveAvatar} >
                                <div className="ui inverted button" onClick={this.onClickUpdateButton} >Update</div>
                            </div>
                            {/* <img src={this.props.other_avatar_url} alt="" onMouseOver={this.onMouseOverAvatar} /> */}
                            {img_url}
                        </div>

                        <div className="content">
                            {/* <p className="header">{this.props.other_user.username}</p>
                            <div className="meta">
                                <span className="cursor-pointer" name="Visited" onClick={this.onClickMenu}><strong>{this.props.other_user_visited_destinations.length}</strong> cities</span> · <span className="cursor-pointer" name="Followers" onClick={this.onClickMenu}><strong>{this.props.other_user_followers.length}</strong> followers</span> · <span className="cursor-pointer" name="Following" onClick={this.onClickMenu}><strong>{this.props.other_user_following.length}</strong> following</span>
                            </div> */}
                            {header_text}
                            {meta_text}
                            <div className="description">
                                <p></p>
                            </div>
                            <div className="extra">
                                <p></p>
                            </div>
                        </div>

                    </div>
                </div>

                <UserCardModalUploadAvatar {...this.props} />
            </div>
        )
    }
}

export default OtherUserCard