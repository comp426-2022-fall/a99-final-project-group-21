import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import AppComponent from './component'
import './component3.css'

const Component3 = (props) => {
  return (
    <div className={`component3-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component3-image"
      />
      <svg viewBox="0 0 658.2857142857142 1024" className="component3-icon">
        <path d="M182.857 438.857h292.571v-109.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v109.714zM658.286 493.714v329.143c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-329.143c0-30.286 24.571-54.857 54.857-54.857h18.286v-109.714c0-140.571 115.429-256 256-256s256 115.429 256 256v109.714h18.286c30.286 0 54.857 24.571 54.857 54.857z"></path>
      </svg>
      <Link to="/login-screen" className="component3-navlink">
        <AppComponent
          rootClassName="app-component-root-class-name"
          className="component3-component"
        ></AppComponent>
      </Link>
      <h1 className="component3-text">
        <span>Calorie Tracker</span>
        <br></br>
      </h1>
    </div>
  )
}

Component3.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src: '/playground_assets/image-200h.png',
}

Component3.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component3
