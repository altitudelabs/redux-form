import React from 'react'

import { Field, reduxForm } from '../../lib/reduxForm'
import { attachScrollRef } from '../../lib/reduxForm/web'

import * as validations from './validations'
import Input from './Input'

const InputWithScrollPos = attachScrollRef(Input)

const Form = props => {
  const {
    handleSubmit,
    reset,
    pristine,
    submitting,
  } = props

  return (
    <div>
      <Field
        name="username"
        type="text"
        component={InputWithScrollPos}
        label="Username"
        validate={[validations.required, validations.minLength4, validations.maxLength8]}
      />

      <Field
        name="password"
        type="password"
        component={Input}
        label="Password"
      />

      <Field
        name="field1"
        type="field1"
        component={Input}
        label="Field"
      />

      <Field
        name="field2"
        type="field2"
        component={Input}
        label="Field"
      />

      <Field
        name="field3"
        type="field3"
        component={Input}
        label="Field"
      />

      <Field
        name="field4"
        type="field4"
        component={Input}
        label="Field"
      />

      <Field
        name="field5"
        type="field5"
        component={Input}
        label="Field"
      />

      <Field
        name="field6"
        type="field6"
        component={Input}
        label="Field Required"
        validate={[validations.required]}
      />

      <Field
        name="field7"
        type="field7"
        component={Input}
        label="Field"
      />

      <Field
        name="field8"
        type="field8"
        component={Input}
        label="Field"
      />

      <Field
        name="field9"
        type="field9"
        component={Input}
        label="Field"
      />

      <Field
        name="field10"
        type="field10"
        component={Input}
        label="Field"
      />

      <Field
        name="field11"
        type="field11"
        component={Input}
        label="Field"
      />

      <Field
        name="field12"
        type="field12"
        component={Input}
        label="Field"
      />

      <Field
        name="field13"
        type="field13"
        component={Input}
        label="Field"
      />

      <Field
        name="field14"
        type="field14"
        component={Input}
        label="Field"
      />

      <Field
        name="field15"
        type="field15"
        component={Input}
        label="Field"
      />

      <button onClick={handleSubmit} disabled={submitting}>Submit</button>
      <button type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
    </div>
  )
}

export default reduxForm(Form)
