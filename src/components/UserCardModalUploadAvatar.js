import React from 'react'
import { connect } from 'react-redux'

class UserCardModalUploadAvatar extends React.Component {

    onClickModalCancelButton = () => {
        document.querySelector('div[name="modal-upload-avatar"]').classList.remove("active")
    }

    onClickModalOkButton = () => {
        document.querySelector('div[name="modal-upload-avatar"]').classList.remove("active")
        const files = document.querySelector('input[name="modal-uploaded-file"]').files

        if (files.length !== 0) {
            const formData = new FormData()
            formData.append('user[avatar]', files[0])
    
            fetch(`https://hello-world-app-backend.herokuapp.com/api/v1/users/${this.props.user.id}`, {
                method: 'PATCH',
                headers: { 'Authorization' : `Bearer ${localStorage.getItem("token")}` },
                body: formData
            })
            .then(response => response.json())
            .then(response => this.props.setAvatarUrl(response.avatar_url))
        }
    }
    
    render() {
        // console.log("UserCardModalUploadAvatar: this.props => ", this.props)

        return (
            <div className="ui small modal" name="modal-upload-avatar">
                <i className="close icon"></i>
                <div className="header">
                    Upload Photo
                </div>
                <div className="image content">
                    <div className="ui small circular image">
                        {this.props.avatar_url.length <= 16 ? <img src={process.env.PUBLIC_URL + this.props.avatar_url} alt="" /> : <img src={this.props.avatar_url} alt="" /> }
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
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAvatarUrl : avatar_url => dispatch({ type: 'SET_AVATAR_URL', avatar_url })
    }
}

export default connect(null, mapDispatchToProps)(UserCardModalUploadAvatar)