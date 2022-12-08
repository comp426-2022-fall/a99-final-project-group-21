import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import UserScreen from './views/user-screen'
import UserCreationScreen from './views/user-creation-screen'
import LoginScreen from './views/login-screen'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={UserScreen} exact path="/user-screen" />
        <Route
          component={UserCreationScreen}
          exact
          path="/user-creation-screen"
        />
        <Route component={LoginScreen} exact path="/login-screen" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
