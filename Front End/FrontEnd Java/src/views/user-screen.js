import React from 'react'

import { Helmet } from 'react-helmet'

import './user-screen.css'

const UserScreen = (props) => {
  return (
    <div className="user-screen-container">
      <Helmet>
        <title>User-Screen - Hollow Major Giraffe</title>
        <meta
          property="og:title"
          content="User-Screen - Hollow Major Giraffe"
        />
      </Helmet>
      <h1 className="user-screen-text">
        <span>
          Welcome! My name is CALORIE, I was specifically designed by my three
          wonderful fathers to ensure the highest quality of service! Below, all
          you need to do is insert the &quot;meal name&quot; and the amount of
          calories associated with it and I will do all the hard work for you. 
        </span>
        <br></br>
      </h1>
      <img
        alt="image"
        src="/playground_assets/screen%20shot%202022-12-08%20at%2012.09.57%20am-300w.png"
        className="user-screen-image"
      />
      <svg viewBox="0 0 1024 1024" className="user-screen-icon">
        <path d="M726 470v-86h-86v86h86zM554 470v-86h-84v86h84zM384 470v-86h-86v86h86zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
      </svg>
      <h1 className="user-screen-text3">Calories:</h1>
      <h1 className="user-screen-text4">Meal name:</h1>
      <h1 className="user-screen-text5">Calories:</h1>
      <h1 className="user-screen-text6">Meal List:</h1>
      <input
        type="text"
        placeholder="meal"
        className="user-screen-textinput input"
      />
      <input
        type="text"
        placeholder="calories"
        className="user-screen-textinput1 input"
      />
    </div>
  )
}

export default UserScreen
