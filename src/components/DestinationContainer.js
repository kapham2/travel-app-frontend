import React from 'react'
import { connect } from 'react-redux'
import LogoutNavigation from './LogoutNavigation'
import DestinationCard from './DestinationCard'
import DestinationPeopleContainer from './DestinationPeopleContainer'

class DestinationContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            search: "",
            activeView: "People Who Visited"
        }
    }

    onChangeSearch = (e) => {
        // console.log("DestinationContainer: onChangeSearch =>", e.target.value)
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

    render() {
        // console.log("DestinationContainer: this.props =>", this.props)
        return (
            <div className="ui very padded grid">
                <div className="row"></div>

                <div className="ui row">
                    <LogoutNavigation {...this.props} search={this.state.search} onChangeSearch={this.onChangeSearch} />
                </div>

                <div className="row">
                    <DestinationCard {...this.props} />
                </div>
                
                <div className="row">
                    {/* <DestinationPeopleNavigation {...this.props} search={this.state.search} clearSearch={this.clearSearch} /> */}
                    <DestinationPeopleContainer {...this.props} activeView={this.state.activeView} search={this.state.search} clearSearch={this.clearSearch}/>
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

        destination: state.destination,
        photo_url: state.photo_url,
        users_visited: state.users_visited,
        users_saved: state.users_saved
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOtherUser: data => dispatch({ type: 'SET_OTHER_USER', data }),
        setDestination: data => dispatch({ type: 'SET_DESTINATION', data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DestinationContainer)

