import React, { Component } from 'react';
import { Form } from 'components/PhonebookForm/PhonebookForm';

class Phonebook extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      name: '',
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const name = form.elements.name.value;

    this.setState({ name: name });

    console.log(this.state.name);

    form.reset();
  };

  render() {
    return <Form handler={this.handleSubmit} />;
  }
}

export default Phonebook;
