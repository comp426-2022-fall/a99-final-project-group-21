import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Component5 from '../components/component5'
import './user-creation-screen.css'

const UserCreationScreen = (props) => {
  return (
    <div className="user-creation-screen-container">
      <Helmet>
        <title>User-Creation-Screen - Hollow Major Giraffe</title>
        <meta
          property="og:title"
          content="User-Creation-Screen - Hollow Major Giraffe"
        />
      </Helmet>
      <h1 className="user-creation-screen-text">Create your account</h1>
      <h1 className="user-creation-screen-text1">Enter your weight goal:</h1>
      <h1 className="user-creation-screen-text2">Enter your current weight:</h1>
      <input
        type="text"
        placeholder="current weight"
        className="user-creation-screen-input input"
      />
      <h1 className="user-creation-screen-text3">
        Enter the information below:
      </h1>
      <Link to="/login-screen" className="user-creation-screen-navlink">
        <Component5
          rootClassName="component5-root-class-name"
          className="user-creation-screen-component"
        ></Component5>
      </Link>
      <input
        type="text"
        placeholder="goal weight"
        className="user-creation-screen-textinput input"
      />
      <input
        type="text"
        placeholder="Username"
        className="user-creation-screen-textinput1 input"
      />
      <input
        type="text"
        placeholder="Password"
        className="user-creation-screen-textinput2 input"
      />
      <img
        alt="image"
        src="/playground_assets/screen%20shot%202022-12-08%20at%2012.09.57%20am-200w.png"
        className="user-creation-screen-image"
      />
      <svg viewBox="0 0 1024 1024" className="user-creation-screen-icon">
        <path d="M726 470v-86h-86v86h86zM554 470v-86h-84v86h84zM384 470v-86h-86v86h86zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
      </svg>
    </div>
  )
}

export default UserCreationScreen
