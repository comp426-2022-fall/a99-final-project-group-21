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
        <span>Welcome!</span>
        <br></br>
      </h1>
      <span className="user-screen-text3">
        <span>
          Remaining Calories:
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
      </span>
      <span className="user-screen-text6">
        <span>
          Input Calories:
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
      </span>
      <input
        type="text"
        placeholder="Input calories"
        className="user-screen-textinput input"
      />
    </div>
  )
}

export default UserScreen
