import React from 'react'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {

    constructor() {
        super()
        this.state = {
            error: '',
            loginForm: true,
        }
    }

    authenticate = (event) => {
        event.preventDefault()
        console.log("LoginForm: authenticate => ")
        const username = event.target.querySelector('input[name="username"').value
        const password = event.target.querySelector('input[name="password"').value

        if (this.state.loginForm) {
            fetch('http://localhost:3333/api/v1/login', {
                method: 'POST',
                headers: { 'Content-type' : 'application/json' },
                body: JSON.stringify({
                    user: {
                        username: username,
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
            .then(response => {
                console.log("fetch response:", response)
                this.props.setUser(response)
                localStorage.setItem('token', response.token)
                this.props.history.push(`/${response.user.username}`)
                // this.props.history.push("/self")
            })
            .then(() => {
                fetch('http://localhost:3333/api/v1/user_destinations', {
                    headers: { 'Authorization' : `Bearer ${localStorage.getItem("token")}` },
                })
                .then(response => response.json())
                .then(response => this.props.setUserDestinations(response))
    
                fetch('http://localhost:3333/api/v1/follows', {
                    headers: { 'Authorization' : `Bearer ${localStorage.getItem("token")}` },
                })
                .then(response => response.json())
                .then(response => this.props.setFollows(response))
            })
            .catch(response => response.json().then(response => {
                console.log("fetch error:", response.error)
                this.setState({ error: response.error })
                document.getElementById("error-message").classList.remove("hidden")
            }))
        }
        // Sign up Form
        else {
            fetch('http://localhost:3333/api/v1/users', {
                method: 'POST',
                headers: { 'Content-type' : 'application/json' },
                body: JSON.stringify({
                    user: {
                        username: username,
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
            .then(response => {
                console.log("fetch response:", response)
                this.props.setUser(response)
                localStorage.setItem('token', response.token)
                this.props.history.push(`/${response.user.username}`)
                // this.props.history.push("/self")
            })
            .then(() => {
                fetch('http://localhost:3333/api/v1/user_destinations', {
                    headers: { 'Authorization' : `Bearer ${localStorage.getItem("token")}` },
                })
                .then(response => response.json())
                .then(response => this.props.setUserDestinations(response))
    
                fetch('http://localhost:3333/api/v1/follows', {
                    headers: { 'Authorization' : `Bearer ${localStorage.getItem("token")}` },
                })
                .then(response => response.json())
                .then(response => this.props.setFollows(response))
            })
            .catch(response => response.json().then(response => {
                console.log("fetch error:", response.error)
                this.setState({ error: response.error })
                document.getElementById("error-message").classList.remove("hidden")
            }))
        }
    }

    onClickChangeFormType = () => {
        this.setState({
            loginForm: !this.state.loginForm
        })
    }

    render() {
        // console.log("LoginForm: this.props =>", this.props)
        return (
            <div className="ui very padded raised segment">
                <h2 className="ui middle aligned icon header">
                    <i className="plane icon"></i>
                    HelloWorld
                </h2>
                <br/>
                <div className="ui hidden error message" id="error-message">
                    {this.state.error}
                </div>
                <form className="ui form" onSubmit={this.authenticate}>
                    <div className="field" name ="field">
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="field">
                        <input type="password" name="password" placeholder="password" />
                    </div>
                    <button className="fluid ui black button" type="submit">{ this.state.loginForm ? 'Login' : 'Sign up' }</button>
                </form>
                <br/>
                { 
                    this.state.loginForm 
                    ? (<div className="ui center aligned container">Don't have an account? <Link to="/" onClick={this.onClickChangeFormType}>Sign up</Link></div>) 
                    : (<div className="ui center aligned container">Already have an account? <Link to="/" onClick={this.onClickChangeFormType}>Login</Link></div>)
                }
            </div>
        )
    }
}

export default LoginForm