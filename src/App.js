import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import '../node_modules/semantic-ui-css/semantic.css'

import PrivateRoute from './components/PrivateRoute'
import LoginContainer from './components/LoginContainer'
import UserContainer from './components/UserContainer'
import OtherUserContainer from './components/OtherUserContainer'
class App extends Component { 

  componentDidMount() {
    if (localStorage.getItem("token")) {
      fetch('http://localhost:3333/api/v1/users/user', {
        headers: { 'Authorization' : `Bearer ${localStorage.getItem("token")}` },
      })
      .then(response => response.json())
      .then(response => this.props.setUser(response))

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
    }
  }
  
  render() {
    // console.log("App: this.props =>", this.props)
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <PrivateRoute exact path={`/${this.props.user.username}`} component={UserContainer} />
          {/* <PrivateRoute exact path={"/:username"} component={UserContainer} /> */}
          {/* <PrivateRoute exact path="/self" component={UserContainer} /> */}
          <PrivateRoute exact path="/:username" component={OtherUserContainer} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}


const mapStateToProps = (state) => {
  return { user: state.user }
}

const mapDispatchToProps = (dispatch) => {
  return {
      setUser: data => dispatch({ type: 'SET_USER', data }),
      setUserDestinations: data => dispatch({ type: 'SET_USER_DESTINATIONS', data }),
      setFollows: data => dispatch({ type: 'SET_FOLLOWS', data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
