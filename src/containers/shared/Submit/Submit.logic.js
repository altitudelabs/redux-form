import React, { Component } from 'react'

const SubmitLogic = (RenderComponent) => class extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <RenderComponent
        onFormSubmit={this.props.submit}
        {...this.state}
        {...this.props}
      />
    )
  }
}

export default SubmitLogic
