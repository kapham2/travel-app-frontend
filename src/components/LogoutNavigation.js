import React from 'react'
// import _ from 'lodash'

class LogoutNavigation extends React.Component {

    onClickLogout = () => {
        localStorage.clear()
        this.props.clearState()
        this.props.history.push("/")
    }

    onClickProfile = () => {
        this.props.setOtherUser({
            user: this.props.user,
            avatar_url: this.props.avatar_url,
            visited_destinations: this.props.user_visited_destinations,
            saved_destinations: this.props.user_saved_destinations,
            followers: this.props.user_followers,
            following: this.props.user_following,
        })
        this.props.setActiveView("Visited")
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

    onClickDropDownExplore = () => {
        document.querySelector('div[name="dropdown-menu-explore"').classList.remove("hidden")
        document.querySelector('div[name="dropdown-menu-explore"').classList.add("visible")
    }

    onMouseLeaveDropDownExplore = () => {
        document.querySelector('div[name="dropdown-menu-explore"').classList.remove("visible")
        document.querySelector('div[name="dropdown-menu-explore"').classList.add("hidden")
    }

    onClickExplore = () => {
        this.props.setActiveView("Explore Cities")
        this.props.history.push(`/explore/cities`)
    }

    onClickExplorePeople = () => {
        this.props.setActiveView("Explore People")
        this.props.history.push(`/explore/people`)
    }

    render() {
        // console.log("LogoutNavigation: this.props =>", this.props)

        return (
            <div className="ui borderless menu fixed">
                <div className="ui text container">
                    <div className="ui header link item" onClick={this.onClickProfile}>
                        <i className="plane icon"></i>
                        <div id="hide-mobile-only">HelloWorld</div>
                    </div>

                    <div className="item" id="hide-mobile-only">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." value={this.props.search} onChange={/*_.debounce(this.props.onChangeSearch, 500)*/this.props.onChangeSearch} />
                            <i className="search icon"></i>
                        </div>
                    </div>

                    <div className="ui right dropdown item" id="hide-mobile-only"onClick={this.onClickDropDownExplore} onMouseLeave={this.onMouseLeaveDropDownExplore} >
                        Explore
                        <i className="dropdown icon" />
                        <div className="menu transition hidden" name="dropdown-menu-explore" onMouseLeave={this.onMouseLeaveDropDownExplore} >
                            <div className="item" onClick={this.onClickExplore} >Cities</div>
                            <div className="item" onClick={this.onClickExplorePeople} >People</div>
                        </div>
                    </div>

                    <div className="ui right item" id="show-mobile-only" onClick={this.onClickExplore} >
                        <i className="images large icon" />
                    </div>

                    <div className="ui right item" id="show-mobile-only" onClick={this.onClickExplorePeople} >
                        <i className="users large icon" />
                    </div>

                    {/* <div className="ui right link item" onClick={this.onClickExplore} >
                        Explore
                    </div> */}
                    
                    <div className="ui right dropdown item" id="hide-mobile-only" onClick={this.onClickDropDown} onMouseLeave={this.onMouseLeaveDropDown}>
                        <div className="ui mini circular image">
                            {this.props.avatar_url.length <= 16 ? <img src={process.env.PUBLIC_URL + this.props.avatar_url} alt=""/> : <img src={this.props.avatar_url} alt=""/>}
                        </div>
                        <i className="dropdown icon" />
                        <div className="menu transition hidden" name="dropdown-menu" onMouseLeave={this.onMouseLeaveDropDown} >
                            <div className="item" onClick={this.onClickProfile} >Profile</div>
                            <div className="item" onClick={this.onClickLogout} >Logout</div>
                        </div>
                    </div>

                    <div className="ui right item" id="show-mobile-only" onClick={this.onClickLogout} >
                        <i className="sign-out large icon" />
                    </div>
                </div>
            </div>
        )
    }
}

export default LogoutNavigation