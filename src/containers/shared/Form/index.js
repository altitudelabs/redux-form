import React, { Component } from 'react'
import _ from 'lodash'
import { getDisplayName } from '../utils'

const FormWrapper = (WrappedForm) => class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      values: {},
      errors: [],
    }

    this.submit = this.submit.bind(this)
    this.valueChanged = this.valueChanged.bind(this)
  }

  valueChanged({ name, value, valid, errors }) {
    const state = { values: {} }

    state.values[name] = {
      value,
      valid,
      errors,
    }

    this.setState(state)
  }

  validate() {
    const isFormValid = _.every(Object.keys(this.state.values), (key) => {
      return this.state.values[key].valid
    })

    return isFormValid;
  }

  submit() {
    if (this.validate()) {
      this.props.onSubmit(this.state.values)
    }
  }

  render() {
    const {
      children,
      ...others,
    } = this.props

    const childrenWithProps = React.Children.map(children, (child) => {
      if (_.startsWith(getDisplayName(child.type), 'Input')) {
        return React.cloneElement(child, {
          valueChanged: this.valueChanged,
        })
      }

      if (_.startsWith(getDisplayName(child.type), 'Submit')) {
        return React.cloneElement(child, {
          submit: this.submit,
        })
      }

      return React.cloneElement(child)
    })

    return (
      <WrappedForm
        children={childrenWithProps}
        {...others}
      />
    )
  }
}

const Form = props => <div>{props.children}</div>

export default FormWrapper(Form)
