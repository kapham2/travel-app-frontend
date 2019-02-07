import React from 'react'
import { connect } from 'react-redux'
import LogoutNavigation from './LogoutNavigation'
import OtherUserCard from './OtherUserCard'
import OtherUserDestinationContainer from './OtherUserDestinationContainer'
class OtherUserContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            search: "",
            activeView: "Visited"
        }
    }

    setActiveView = (newView) => {
        // console.log("OtherUserContainer: => setActiveView", newView)
        this.setState({ activeView: newView })
    }

    onChangeSearch = (e) => {
        // console.log("OtherUserContainer: onChangeSearch =>", e.target.value)
        this.setState({
            search: e.target.value
        })
    }

    clearSearch = () => {
        this.setState({
            search: ""
        })
    }

    componentDidMount() {
        if (this.props.match.url.slice(1) === "explore") {
            this.props.history.push("/explore")
        }

        if (this.props.match.url.split("/")[1] === "places") {
            this.setActiveView("People Who Visited")
            fetch(`http://localhost:3333/api/v1/destinations-by-city/${this.props.match.url.slice(8)}`, {
                headers: { 'Authorization' : `Bearer ${localStorage.getItem("token")}` },
            })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                else {
                    throw response
                }
            })
            .then(response => {
                // console.log("fetch response:", response)
                this.props.setDestination(response)
            })
            .catch(response => response.json().then(response => {
                // console.log("fetch error:", response.error)
                this.props.history.push("/404")
            }))
        }
        // if (this.props.match.url.split("/")[1] === :username)
        else {
            this.setActiveView("Visited")
            fetch(`http://localhost:3333/api/v1/other-users-by-username/${this.props.match.url.slice(1)}`, {
                headers: { 'Authorization' : `Bearer ${localStorage.getItem("token")}` },
            })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                else {
                    throw response
                }
            })
            .then(response => {
                // console.log("fetch response:", response)
                this.props.setOtherUser(response)
            })
            .catch(response => response.json().then(response => {
                // console.log("fetch error:", response.error)
                this.props.history.push("/404")
            }))
        }
    }

    render() {
        // console.log("OtherUserContainer: this.props =>", this.props)

        return (
            <div className="ui very padded grid">
                <div className="row"></div>

                <div className="ui row">
                    <LogoutNavigation {...this.props} setActiveView={this.setActiveView} search={this.state.search} onChangeSearch={this.onChangeSearch} />
                </div>

                <div className="row">
                    <OtherUserCard {...this.props} activeView={this.state.activeView} setActiveView={this.setActiveView}/>
                </div>
                
                <div className="row">
                    {/* <OtherUserDestinationNavigation {...this.props} search={this.state.search} clearSearch={this.clearSearch} /> */}
                    <OtherUserDestinationContainer {...this.props} activeView={this.state.activeView} setActiveView={this.setActiveView} search={this.state.search} clearSearch={this.clearSearch}/>
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
        user_followers: state.user_followers,
        user_following: state.user_following,

        user_destinations: state.user_destinations,
        follows: state.follows,
        
        other_user: state.other_user,
        other_avatar_url: state.other_avatar_url,
        other_user_visited_destinations: state.other_user_visited_destinations,
        other_user_saved_destinations: state.other_user_saved_destinations,
        other_user_followers: state.other_user_followers,
        other_user_following: state.other_user_following,

        destination: state.destination,
        photo_url: state.photo_url,
        users_visited: state.users_visited,
        users_saved: state.users_saved
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOtherUser: data => dispatch({ type: 'SET_OTHER_USER', data }),
        setDestination: data => dispatch({ type: 'SET_DESTINATION', data }),
        clearState: () => dispatch({ type: 'CLEAR_STATE' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherUserContainer)

