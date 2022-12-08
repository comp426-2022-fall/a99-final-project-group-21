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
  rootClassName: '',
  button: 'Login\n',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default AppComponent
