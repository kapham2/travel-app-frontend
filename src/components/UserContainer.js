import React from 'react'
import { connect } from 'react-redux'
import LogoutNavigation from './LogoutNavigation'
import UserCard from './UserCard'
import UserDestinationNavigation from './UserDestinationNavigation'
import UserDestinationContainer from './UserDestinationContainer'

class UserContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            search: "",
            activeView: "Visited"
        }
    }

    setActiveView = (newView) => {
        // console.log("UserContainer: => setActiveView", newView)
        this.setState({ activeView: newView })
    }

    onChangeSearch = (e) => {
        // console.log("UserContainer: onChangeSearch =>", e.target.value)
        this.setState({
            search: e.target.value
        })
    }

    clearSearch = () => {
        this.setState({
            search: ""
        })
    }

    render() {
        // console.log("UserContainer: this.props =>", this.props)
        return (
            <div className="ui very padded grid">
                <div className="row"></div>

                <div className="ui row">
                    <LogoutNavigation {...this.props} search={this.state.search} onChangeSearch={this.onChangeSearch} />
                </div>

                <div className="row">
                    <UserCard {...this.props} setActiveView={this.setActiveView} />
                </div>
                
                <div className="row">
                    {/* <UserDestinationNavigation {...this.props} search={this.state.search} clearSearch={this.clearSearch} /> */}
                    <UserDestinationContainer {...this.props} activeView={this.state.activeView} search={this.state.search} clearSearch={this.clearSearch}/>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        user: state.user,
        avatar_url: state.avatar_url,
        user_visited_destinations: state.user_visited_destinations,
        user_saved_destinations: state.user_saved_destinations,
        // more_destinations: state.more_destinations,
        user_followers: state.user_followers,
        user_following: state.user_following,
        // more_users: state.more_users,
        user_destinations: state.user_destinations,
        follows: state.follows
    }
}

export default connect(mapStateToProps)(UserContainer)

