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

                                <div className="ui tiny circular blurring dimmable image">
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

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        user: state.user,
        avatar_url: state.avatar_url
    }
}

export default connect(mapStateToProps)(NotFoundContainer)