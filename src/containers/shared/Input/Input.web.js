import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ name, value, errors, onValueChange, style, ...others }) => {
  return (
    <div>
      <input
        type="text"
        id={name}
        placeholder="placeholder"
        style={style}
        value={value}
        onChange={e => onValueChange(e.target.value)}
      />
    </div>
  )
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
}

export default Input
