import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Component1 from '../components/component1'
import './login-screen.css'

const LoginScreen = (props) => {
  return (
    <div className="login-screen-container">
      <Helmet>
        <title>Login-Screen - Hollow Major Giraffe</title>
        <meta
          property="og:title"
          content="Login-Screen - Hollow Major Giraffe"
        />
      </Helmet>
      <input type="text" placeholder="Username" className="input" />
      <input type="text" placeholder="Password" className="input" />
      <Link to="/user-screen" className="login-screen-navlink">
        <Component1
          rootClassName="component1-root-class-name"
          className="login-screen-component"
        ></Component1>
      </Link>
      <svg viewBox="0 0 658.2857142857142 1024" className="login-screen-icon">
        <path d="M182.857 438.857h292.571v-109.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v109.714zM658.286 493.714v329.143c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-329.143c0-30.286 24.571-54.857 54.857-54.857h18.286v-109.714c0-140.571 115.429-256 256-256s256 115.429 256 256v109.714h18.286c30.286 0 54.857 24.571 54.857 54.857z"></path>
      </svg>
    </div>
  )
}

export default LoginScreen
