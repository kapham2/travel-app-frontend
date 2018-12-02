import React from 'react'

class LogoutNavigation extends React.Component {

    onClickLogout = () => {
        localStorage.clear()
        this.props.history.push("/")
    }

    onClickProfile = () => {
        this.props.history.push(`/${this.props.user.username}`)
    }

    onClickDropDown = () => {
        document.querySelector('div[name="dropdown-menu"').classList.remove("hidden")
        document.querySelector('div[name="dropdown-menu"').classList.add("visible")
    }

    onMouseLeaveDropDown = () => {
        document.querySelector('div[name="dropdown-menu"').classList.remove("visible")
        document.querySelector('div[name="dropdown-menu"').classList.add("hidden")
    }

    render() {
        // console.log("LogoutNavigation: this.props =>", this.props)
        const avatar_url = this.props.avatar_url !== "" ? this.props.avatar_url : (Object.keys(this.props.user).length !== 0 ? `/users/dog${this.props.user.id.toString().slice(-1)}.jpg` : null)

        return (
            <div className="ui borderless menu fixed">
                <div className="ui text container">
                    <div className="ui header link item" onClick={this.onClickProfile}>
                        <i className="compass outline icon"></i>
                        <div className="computer only">Travel App</div>
                    </div>

                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." />
                            <i className="search icon"></i>
                        </div>
                    </div>

                    {/* <div className="ui right link item">
                        Explore
                    </div> */}
                    
                    <div className="ui right dropdown item" onClick={this.onClickDropDown} onMouseLeave={this.onMouseLeaveDropDown}>
                        <div className="ui mini circular image">
                            <img src={avatar_url} alt=""/>
                        </div>
                        <i className="dropdown icon" />
                        <div className="menu transition hidden" name="dropdown-menu" onMouseLeave={this.onMouseLeaveDropDown} >
                            <div className="item" onClick={this.onClickProfile} >Profile</div>
                            <div className="item" onClick={this.onClickLogout} >Logout</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default LogoutNavigation