import React from 'react'
import PropTypes from 'prop-types'

const Submit = ({ onFormSubmit }) => {
  return (
    <div>
      <button onClick={onFormSubmit}>Submit</button>
    </div>
  )
}

Submit.propTypes = {
  onFormSubmit: PropTypes.func.isRequired
}

export default Submit
