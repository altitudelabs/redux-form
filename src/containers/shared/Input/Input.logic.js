import React, { Component } from 'react'

const InputLogic = (RenderComponent) => class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }

    this.validate = this.validate.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  componentDidMount() {
    const errs = this.validate(this.state.value)

    this.props.valueChanged({
      value: this.state.value,
      name: this.props.name,
      errors: errs,
      valid: errs.length === 0 && this.state.value ? true : false,
    })
  }

  validate(value) {
    const validations = [
      v => v.length >= 8 || 'Your name is too short!',
      v => v.length <= 15 || 'Your name is too long!',
      v => v.indexOf('@') === -1 || 'Your name contains @? Really?'
    ]

    return validations.map(f => f(value)).filter(e => e !== true)
  }

  onValueChange(value) {
    const {
      name
    } = this.props

    this.setState({
      value,
    }, () => {
      const errs = this.validate(value)

      this.props.valueChanged({
        value,
        name,
        errors: errs,
        valid: errs.length === 0 && this.state.value ? true : false,
      })
    })
  }

  render() {
    return (
      <RenderComponent
        onValueChange={this.onValueChange}
        {...this.state}
        {...this.props}
      />
    )
  }
}

export default InputLogic
