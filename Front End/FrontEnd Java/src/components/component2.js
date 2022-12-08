import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className={`component2-container ${props.rootClassName} `}>
      <button className="component2-button button">{props.button}</button>
    </div>
  )
}

Component2.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

Component2.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default Component2
