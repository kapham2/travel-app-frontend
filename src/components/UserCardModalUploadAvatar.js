import React from 'react'

class UserCardModalUploadAvatar extends React.Component {

    onClickModalCancelButton = () => {
        document.querySelector('div[name="modal-upload-avatar"]').classList.remove("active")
    }

    onClickModalOkButton = () => {
        document.querySelector('div[name="modal-upload-avatar"]').classList.remove("active")
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
        .then(() => document.querySelector('div[name="modal-upload-avatar"]').classList.remove("active"))
    }
    
    render() {
        // console.log("UserCardModalUploadAvatar: this.props => ", this.props)

        const avatar_url = this.props.avatar_url !== "" ? this.props.avatar_url : `/users/dog${this.props.user.id.toString().slice(-1)}.jpg`

        return (
            <div className="ui small modal" name="modal-upload-avatar">
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
        )
    }
}

export default UserCardModalUploadAvatar