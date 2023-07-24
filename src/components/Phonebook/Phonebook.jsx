import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from 'components/PhonebookForm/PhonebookForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Title } from 'components/Title/Title';

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
    const contacts = this.state.contacts;
    const contact = {
      name: name,
      id: nanoid(),
    };

    contacts.push(contact);

    this.setState({ name: name, contacts: contacts });

    form.reset();
  };

  render() {
    const contactsArr = this.state.contacts;
    const contactsStatus = this.state.contacts.length;
    return (
      <div>
        <Title title="Phonebook" />
        <Form handler={this.handleSubmit} />
        <Title title="Contacts" />
        {contactsStatus > 0
          ? contactsArr.map(contact => (
              <Contacts key={contact.id} name={contact.name} />
            ))
          : null}
      </div>
    );
  }
}

export default Phonebook;
