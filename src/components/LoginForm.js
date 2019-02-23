import React from 'react'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {

    constructor() {
        super()
        this.state = {
            errorMessage: '',
            loginForm: true,
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // console.log("LoginForm (1): handleSubmit => ")
        const username = event.target.querySelector('input[name="username"]').value
        const password = event.target.querySelector('input[name="password"]').value

        this.state.loginForm ? this.authenticate(username, password) : this.signUp(username, password)
    }

    authenticate = (username, password) => {
        fetch('https://hello-world-app-backend.herokuapp.com/api/v1/login', {
            method: 'POST',
            headers: { 'Content-type' : 'application/json' },
            body: JSON.stringify({
                user: {
                    username: username.toLowerCase(),
                    password: password
                }
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw response
            }
        })
        .then(response => this.setUser(response))
        .then(this.getUserDestinationsAndFollows)
        .catch(response => response.json().then(response => this.setError(response)))
    }

    setUser = (response) => {
        // console.log("LoginForm: response =>", response)
        this.props.setUser(response)
        localStorage.setItem('token', response.token)
        this.props.history.push(`/${response.user.username}`)
    }

    getUserDestinationsAndFollows = () => {
        this.getUserDestinations()
        this.getFollows()
    }

    getUserDestinations = () => {
        fetch('https://hello-world-app-backend.herokuapp.com/api/v1/user_destinations', {
            headers: { 'Authorization' : `Bearer ${localStorage.getItem("token")}` },
        })
        .then(response => response.json())
        .then(response => this.props.setUserDestinations(response))
    }

    getFollows = () => {
        fetch('https://hello-world-app-backend.herokuapp.com/api/v1/follows', {
            headers: { 'Authorization' : `Bearer ${localStorage.getItem("token")}` },
        })
        .then(response => response.json())
        .then(response => this.props.setFollows(response))
    }

    setError = (response) => {
        // console.log("LoginForm: response.error =>", response.error)
        this.setState({ errorMessage: response.error })
        document.getElementById("error-message").classList.remove("hidden")
    }
    
    signUp = (username, password) => {
        fetch('https://hello-world-app-backend.herokuapp.com/api/v1/users', {
            method: 'POST',
            headers: { 'Content-type' : 'application/json' },
            body: JSON.stringify({
                user: {
                    username: username.toLowerCase(),
                    password: password
                }
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw response
            }
        })
        .then(response => this.setUser(response))
        .then(this.getUserDestinationsAndFollows)
        .catch(response => response.json().then(response => this.setError(response)))
    }

    onClickLink = () => {
        this.setState({
            errorMessage: '',
            loginForm: !this.state.loginForm
        })
        document.getElementById("error-message").classList.add("hidden")
        document.getElementById("form").reset()
    }

    render() {
        // console.log("LoginForm (0): this.props =>", this.props)

        let buttonText
        let linkLabel
        let linkText

        if (this.state.loginForm) {
            buttonText = 'Login'
            linkLabel = "Don't have an account? "
            linkText = 'Sign up'
        }
        else {
            buttonText = 'Sign up'
            linkLabel = 'Already have an account? '
            linkText = 'Login'
        }

        return (
            <div className="ui very padded raised segment">
                <h3 className="ui center aligned icon header">
                    <i className="plane icon" />
                    HelloWorld
                </h3>
                <br/>
                <div className="ui small hidden error message" id="error-message">
                    {this.state.errorMessage}
                </div>
                <form className="ui form" id="form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="field">
                        <input type="password" name="password" placeholder="password" />
                    </div>
                    <button className="fluid ui black button" type="submit">{buttonText}</button>
                </form>
                <br/>
                <div className="ui center aligned container">{linkLabel}<Link to="/" onClick={this.onClickLink}>{linkText}</Link></div>
            </div>
        )
    }
}

export default LoginForm