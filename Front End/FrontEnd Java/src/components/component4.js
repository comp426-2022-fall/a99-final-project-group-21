import React from 'react'

import PropTypes from 'prop-types'

import './component4.css'

const Component4 = (props) => {
  return (
    <div className={`component4-container ${props.rootClassName} `}>
      <button className="component4-button button">{props.button}</button>
    </div>
  )
}

Component4.defaultProps = {
  button: 'Create an account',
  rootClassName: '',
}

Component4.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Component4
