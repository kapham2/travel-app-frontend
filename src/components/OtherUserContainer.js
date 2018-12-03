import React from 'react'
import { connect } from 'react-redux'
import LogoutNavigation from './LogoutNavigation'
import OtherUserCard from './OtherUserCard'
import OtherUserDestinationNavigation from './OtherUserDestinationNavigation'

class OtherUserContainer extends React.Component {

    componentDidMount() {
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
            console.log("fetch response:", response)
            this.props.setOtherUser(response)
        })
        .catch(response => response.json().then(response => {
            console.log("fetch error:", response.error)
            this.props.history.push("/404")
        }))
    }

    render() {
        // console.log("OtherUserContainer: this.props =>", this.props)
        return (
            <div className="ui very padded grid">
                <div className="row"></div>

                <div className="ui row">
                    <LogoutNavigation {...this.props} />
                </div>

                <div className="row">
                    <OtherUserCard {...this.props} />
                </div>
                
                <div className="row">
                    <OtherUserDestinationNavigation {...this.props} />
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        user: state.user,
        avatar_url: state.avatar_url,
        other_user: state.other_user,
        other_user_visited_destinations: state.other_user_visited_destinations,
        other_user_saved_destinations: state.other_user_saved_destinations,
        other_user_followers: state.other_user_followers,
        other_user_following: state.other_user_following,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOtherUser: data => dispatch({ type: 'SET_OTHER_USER', data }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherUserContainer)

