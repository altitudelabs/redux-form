import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Form from './Form'
import { InputWeb as Input } from './Input'
import { SubmitWeb as Submit } from './Submit'

class Shared extends Component {
  constructor(props) {
    super(props)

    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler(values) {
    console.log(values)
  }

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <Input
          name={'username'}
          style={{ border: '1px solid grey' }}
        />
        <Submit />
      </Form>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shared)
