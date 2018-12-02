import React from 'react'
import UserCardModalUploadAvatar from './UserCardModalUploadAvatar'

class UserCard extends React.Component {

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
        const avatar_url = this.props.avatar_url !== "" ? this.props.avatar_url : `/users/dog${this.props.user.id.toString().slice(-1)}.jpg`

        return (
            <div className="ui text container">
                <div className="ui very relaxed unstackable items">
                    <div className="item">

                        <div className="ui tiny circular blurring dimmable image">
                            <div className="ui dimmer" onMouseLeave={this.onMouseLeaveAvatar} >
                                <div className="ui inverted button" onClick={this.onClickUpdateButton} >Update</div>
                            </div>
                            <img src={avatar_url} alt="" onMouseOver={this.onMouseOverAvatar} />
                        </div>

                        <div className="content">
                            <p className="header">{this.props.user.username}</p>
                            <div className="meta">
                                <span>{this.props.user_followers.length} followers | {this.props.user_following.length} following</span>
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