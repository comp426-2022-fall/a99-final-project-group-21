import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <button className="component-button button">{props.button}</button>
    </div>
  )
}

AppComponent.defaultProps = {
  button: 'Login\n',
  rootClassName: '',
}

AppComponent.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AppComponent
