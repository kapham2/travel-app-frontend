import React from 'react'

class UserCard extends React.Component {

    onMouseOverAvatar = (e) => {
        e.target.previousSibling.classList.add("active")
    }

    onMouseLeaveAvatar = (e) => {
        e.target.classList.remove("active")
    }
    
    onClickUpdateButton = (e) => {
        document.querySelector('div[name="modal"]').classList.add("active")
    }

    onClickModalCancelButton = () => {
        document.querySelector('div[name="modal"]').classList.remove("active")
    }

    onClickModalOkButton = () => {
        document.querySelector('div[name="modal"]').classList.remove("active")
        const files = document.querySelector('input[name="modal-uploaded-file"]').files
        const formData = new FormData()
        formData.append('user[avatar]', files[0])

        fetch(`http://localhost:3333/api/v1/users/${this.props.user.id}`, {
            method: 'PATCH',
            headers: { 'Authorization' : `Bearer ${localStorage.getItem("token")}` },
            body: formData
        })
        .then(response => response.json())
        .then(response => console.log(response))
        .then(() => document.querySelector('div[name="modal"]').classList.remove("active"))
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

                <div className="ui small modal" name="modal">
                    <i className="close icon"></i>
                    <div className="header">
                        Upload Photo
                    </div>
                    <div className="image content">
                        <div className="ui small circular image">
                                <img src={avatar_url} alt="" />
                        </div>

                        <div className="description" name="modal-description" >
                            <form className="form" name="modal-form" onSubmit={this.onSubmitForm} >
                                <input type="file" name="modal-uploaded-file" /><br/><br/>
                            </form>
                        </div>
                    </div>
                    <div className="actions">
                        <div className="ui button" onClick={this.onClickModalOkButton} >OK</div>
                        <div className="ui button" onClick={this.onClickModalCancelButton} >Cancel</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard