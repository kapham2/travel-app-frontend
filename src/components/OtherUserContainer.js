import React from 'react'
import { connect } from 'react-redux'
import LogoutNavigation from './LogoutNavigation'
import OtherUserCard from './OtherUserCard'
import OtherUserDestinationNavigation from './OtherUserDestinationNavigation'

class OtherUserContainer extends React.Component {

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

export default connect(mapStateToProps)(OtherUserContainer)

