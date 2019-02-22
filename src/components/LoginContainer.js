import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'

class LoginContainer extends React.Component {

    render() {
        // console.log("LoginContainer: this.props =>", this.props)
        return (
            <div className="ui centered grid login-grid">
                <div className="stretched row middle aligned">
                    <div className="column login-column computer only tablet only">
                        <img className="ui rounded bordered image" src={process.env.PUBLIC_URL + "/helloworld.jpg"} alt="" />
                    </div>

                    <div className="column login-column">
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