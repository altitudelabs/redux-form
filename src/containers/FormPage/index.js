import React, { Component } from 'react'
import Form from './Form'

class FormPage extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
        resolve();
      }, 500);
    });
  }

  render() {
    return (
      <Form onSubmit={this.submitHandler} />
    );
  }
}

export default FormPage;
