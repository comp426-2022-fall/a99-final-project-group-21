import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Hollow Major Giraffe</title>
        <meta property="og:title" content="Hollow Major Giraffe" />
      </Helmet>
      <img
        src="/playground_assets/image-200h.png"
        alt="image"
        className="home-image"
      />
      <svg viewBox="0 0 658.2857142857142 1024" className="home-icon">
        <path d="M182.857 438.857h292.571v-109.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v109.714zM658.286 493.714v329.143c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-329.143c0-30.286 24.571-54.857 54.857-54.857h18.286v-109.714c0-140.571 115.429-256 256-256s256 115.429 256 256v109.714h18.286c30.286 0 54.857 24.571 54.857 54.857z"></path>
      </svg>
      <Link to="/login-screen" className="home-navlink">
        <AppComponent
          rootClassName="app-component-root-class-name"
          className="home-component"
        ></AppComponent>
      </Link>
      <h1 className="home-text">
        <span>Calorie Tracker</span>
        <br></br>
      </h1>
    </div>
  )
}

export default Home
