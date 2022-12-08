import React from 'react'

import PropTypes from 'prop-types'

import './component5.css'

const Component5 = (props) => {
  return (
    <div className={`component5-container ${props.rootClassName} `}>
      <button className="component5-button button">{props.button}</button>
    </div>
  )
}

Component5.defaultProps = {
  rootClassName: '',
  button: 'Create',
}

Component5.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default Component5
