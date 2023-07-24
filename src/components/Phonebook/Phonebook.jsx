import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from 'components/PhonebookForm/PhonebookForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Title } from 'components/Title/Title';
import { Browser } from 'components/ContactsBrowser/ContactsBrowser';

class Phonebook extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
      name: '',
      number: '',
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contacts = this.state.contacts;
    const contact = {
      name: name,
      id: nanoid(),
      number: number,
    };

    contacts.push(contact);

    this.setState({ name: name, contacts: contacts, number: number });

    form.reset();
  };

  handleBrowser = evt => {
    this.setState({ filter: evt.target.value });

    const browser = evt.currentTarget;
    const input = browser.elements.browser.value;

    console.log(input);
  };

  render() {
    const contactsArr = this.state.contacts;
    const contactsStatus = this.state.contacts.length;
    return (
      <div>
        <Title title="Phonebook" />
        <Form handler={this.handleSubmit} />
        <Title title="Contacts" />
        <Browser hnadler={this.handleBrowser} />
        {contactsStatus > 0
          ? contactsArr.map(contact => (
              <Contacts number={contact.number} name={contact.name} />
            ))
          : null}
      </div>
    );
  }
}

export default Phonebook;
