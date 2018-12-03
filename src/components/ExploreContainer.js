import React from 'react'
import { connect } from 'react-redux'
import LogoutNavigation from './LogoutNavigation'
import ExploreNavigation from './ExploreNavigation'

class ExploreContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            search: ""
        }
    }

    onChangeSearch = (e) => {
        // console.log("ExploreContainer: onChangeSearch =>", e.target.value)
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
        // console.log("ExploreContainer: this.props =>", this.props)
        return (
            <div className="ui very padded grid">
                <div className="row"></div>

                <div className="ui row">
                    <LogoutNavigation {...this.props} search={this.state.search} onChangeSearch={this.onChangeSearch} />
                </div>

                <div className="row">
                    <div className="ui text container">
                        <div className="ui very relaxed unstackable items">
                            <div className="item">

                                {/* <div className="ui tiny circular blurring dimmable image">
                                    <img src="" alt="" />
                                </div> */}

                                <div className="content">
                                    <p className="header">Explore</p>
                                    {/* <div className="meta">
                                        <span></span>
                                    </div>
                                    <div className="description">
                                        <p></p>
                                    </div>
                                    <div className="extra">
                                        <p></p>
                                    </div> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <ExploreNavigation {...this.props} search={this.state.search} clearSearch={this.clearSearch} />
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        user: state.user,
        avatar_url: state.avatar_url,
        // user_visited_destinations: state.user_visited_destinations,
        // user_saved_destinations: state.user_saved_destinations,
        more_destinations: state.more_destinations,
        // user_followers: state.user_followers,
        // user_following: state.user_following,
        more_users: state.more_users,
        // user_destinations: state.user_destinations,
        // follows: state.follows
    }
}

export default connect(mapStateToProps)(ExploreContainer)

