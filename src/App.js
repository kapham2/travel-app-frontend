import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import '../node_modules/semantic-ui-css/semantic.css'

import PrivateRoute from './components/PrivateRoute'
import LoginContainer from './components/LoginContainer'
// import ExploreContainer from './components/ExploreContainer'
import NotFoundContainer from './components/NotFoundContainer'
import OtherUserContainer from './components/OtherUserContainer'
// import DestinationContainer from './components/DestinationContainer'
class App extends Component { 

  componentDidMount() {
    if (localStorage.getItem("token")) {
      fetch('https://hello-world-app-backend.herokuapp.com/api/v1/users/user', {
        headers: { 'Authorization' : `Bearer ${localStorage.getItem("token")}` },
      })
      .then(response => response.json())
      .then(response => this.props.setUser(response))

      fetch('https://hello-world-app-backend.herokuapp.com/api/v1/user_destinations', {
        headers: { 'Authorization' : `Bearer ${localStorage.getItem("token")}` },
      })
      .then(response => response.json())
      .then(response => this.props.setUserDestinations(response))

      fetch('https://hello-world-app-backend.herokuapp.com/api/v1/follows', {
        headers: { 'Authorization' : `Bearer ${localStorage.getItem("token")}` },
      })
      .then(response => response.json())
      .then(response => this.props.setFollows(response))
    }
  }
  
  render() {
    // console.log("App: this.props =>", this.props)

return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <PrivateRoute exact path="/explore/cities" component={OtherUserContainer} />
          <PrivateRoute exact path="/explore/people" component={OtherUserContainer} />
          <PrivateRoute exact path="/places/:city" component={OtherUserContainer} />
          <PrivateRoute exact path="/404" component={NotFoundContainer} />
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
