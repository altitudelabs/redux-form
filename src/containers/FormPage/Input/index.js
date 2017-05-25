import './style.css'
import React from 'react'

const Input = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-input">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

export default Input
