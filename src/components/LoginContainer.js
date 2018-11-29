import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'

class LoginContainer extends React.Component {

    render() {
        // console.log("LoginContainer: this.props =>", this.props)
        return (
            <div className="ui very padded centered grid">
                <div className="stretched row">
                    <div className="column login-column computer only">
                        <img className="ui rounded image" src="home.jpg" alt="" />
                    </div>
                    <div className="column login-column">
                        {/* <LoginForm {...this.props} setUser={this.props.setUser} /> */}
                        <LoginForm {...this.props} />

                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: data => dispatch({ type: 'SET_USER', data }),
        setUserDestinations: data => dispatch({ type: 'SET_USER_DESTINATIONS', data }),
        setFollows: data => dispatch({ type: 'SET_FOLLOWS', data })
    }
}

export default connect(null, mapDispatchToProps)(LoginContainer)