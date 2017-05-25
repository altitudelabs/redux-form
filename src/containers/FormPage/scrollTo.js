import React, { Component } from 'react';
import { Element } from 'react-scroll'

const scrollTo = (ComposedComponent) => class scrollTo extends Component {
  render() {
    return (
      <div>
        {this.props.input.name && <Element name={`position-${this.props.input.name}`} />}
        <ComposedComponent {...this.props} />
      </div>
    )
  }
}

export default scrollTo
