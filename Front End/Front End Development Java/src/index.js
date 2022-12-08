import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import LoginScreen from './views/login-screen'
import UserScreen from './views/user-screen'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={LoginScreen} exact path="/login-screen" />
        <Route component={UserScreen} exact path="/user-screen" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
