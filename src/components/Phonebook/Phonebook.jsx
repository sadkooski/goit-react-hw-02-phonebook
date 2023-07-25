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
    const newContact = {
      name: name,
      id: nanoid(),
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));

    form.reset();
  };

  handleBrowser = evt => {
    const filterValue = evt.target.value.toLowerCase();
    this.setState({ filter: filterValue });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    const contactsStatus = filteredContacts.length;

    return (
      <div>
        <Title title="Phonebook" />
        <Form handler={this.handleSubmit} />
        <Title title="Contacts" />
        <Browser handler={this.handleBrowser} />
        {contactsStatus > 0 &&
          filteredContacts.map(contact => (
            <Contacts
              key={contact.id}
              number={contact.number}
              name={contact.name}
            />
          ))}
      </div>
    );
  }
}

export default Phonebook;
