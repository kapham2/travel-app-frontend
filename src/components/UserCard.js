import React from 'react'
import UserCardModalUploadAvatar from './UserCardModalUploadAvatar'

class UserCard extends React.Component {

    onClickMenu = (event) => {
        // console.log("UserCard: clicked", event.target.getAttribute('name'))
        this.props.setActiveView(event.target.getAttribute('name'))
    }

    onMouseOverAvatar = (e) => {
        e.target.previousSibling.classList.add("active")
    }

    onMouseLeaveAvatar = (e) => {
        e.target.classList.remove("active")
    }
    
    onClickUpdateButton = (e) => {
        document.querySelector('div[name="modal-upload-avatar"]').classList.add("active")
    }

    render() {
        // console.log("UserCard: this.props => ", this.props)

        return (
            <div className="ui text container">
                <div className="ui very relaxed unstackable items">
                    <div className="item">

                        <div className="ui small circular blurring dimmable image">
                            <div className="ui dimmer" onMouseLeave={this.onMouseLeaveAvatar} >
                                <div className="ui inverted button" onClick={this.onClickUpdateButton} >Update</div>
                            </div>
                            <img src={this.props.avatar_url} alt="" onMouseOver={this.onMouseOverAvatar} />
                        </div>

                        <div className="content">
                            <p className="header">{this.props.user.username}</p>
                            <div className="meta">
                                <span className="cursor-pointer" name="Visited" onClick={this.onClickMenu}><strong>{this.props.user_visited_destinations.length}</strong> cities</span> · <span className="cursor-pointer" name="Followers" onClick={this.onClickMenu}><strong>{this.props.user_followers.length}</strong> followers</span> · <span className="cursor-pointer" name="Following" onClick={this.onClickMenu}><strong>{this.props.user_following.length}</strong> following</span>
                            </div>
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

export default UserCard