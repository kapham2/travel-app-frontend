import React from 'react'

class LogoutNavigation extends React.Component {

    // onClickUserIcon = () => {
    //     document.querySelector('div[name="user-popup"').classList.remove("hidden")
    //     document.querySelector('div[name="user-popup"').classList.add("visible")
    // }

    onClickLogout = () => {
        localStorage.clear()
        this.props.history.push("/")
    }

    render() {
        console.log("LogoutNavigation: this.props =>", this.props)
        return (
            <div className="ui borderless menu fixed">
                <div className="ui text container">
                    <div className="ui header item">
                        <i className="compass outline icon"></i>
                        <div className="computer only">Travel App</div>
                    </div>

                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." />
                            <i className="search icon"></i>
                        </div>
                    </div>

                    <div className="ui right link item" onClick={this.onClickLogout} >
                        Logout
                        {/* <i className="user icon"></i>
                        <div className="ui popup bottom right transition hidden" name="user-popup">
                            <div className="ui list">
                                <div className="link item">Settings</div>
                                <div className="link item">Logout</div>
                            </div>
                        </div> */}
                    </div>

                    <div className="ui right circular item">
                        {
                            Object.keys(this.props.user).length > 0 ? (<div className="ui mini circular image"><img src={`/users/dog${this.props.user.id.toString().slice(-1)}.jpg`} alt=""/></div>) : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default LogoutNavigation