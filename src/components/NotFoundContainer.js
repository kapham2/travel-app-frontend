import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import LogoutNavigation from './LogoutNavigation'

class NotFoundContainer extends React.Component {

    render() {
        // console.log("NotFoundContainer: this.props =>", this.props)

        return (
            <div className="ui very padded grid">
                <div className="row"></div>

                <div className="ui row">
                    <LogoutNavigation {...this.props} />
                </div>

                <div className="row">
                    <div className="ui text container">
                        <div className="ui very relaxed unstackable items">
                            <div className="item">

                                <div className="ui small circular blurring dimmable image">
                                    <img src="/cake.jpg" alt="" />
                                </div>

                                <div className="content">
                                    <p className="header">Yay!</p>
                                    <div className="meta">
                                        <span>You Found the Cake Page!</span>
                                    </div>
                                    <div className="description">
                                        <p><Link to={`/${this.props.user.username}`} >Go Back To Profile</Link></p>
                                    </div>
                                    {/* <div className="extra">
                                        <p></p>
                                    </div> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <img className="ui rounded bordered centered image" src="/cake.gif" alt="" />
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOtherUser: data => dispatch({ type: 'SET_OTHER_USER', data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFoundContainer)