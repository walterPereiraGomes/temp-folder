import React from 'react'
import PropTypes from 'prop-types'

const HelloComponent = props => <h1>{props.message}</h1>

HelloComponent.propTypes = {
  message: PropTypes.string.isRequired
}

export default HelloComponent
