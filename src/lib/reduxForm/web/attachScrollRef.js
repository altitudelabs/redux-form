import React, { Component } from 'react';
import { Element } from 'react-scroll'

const attachScrollRef = (ComposedComponent) => class extends Component {
  render() {
    return (
      <div>
        {this.props.input.name && <Element name={`scroll-${this.props.input.name}`} />}
        <ComposedComponent {...this.props} />
      </div>
    )
  }
}

export default attachScrollRef
