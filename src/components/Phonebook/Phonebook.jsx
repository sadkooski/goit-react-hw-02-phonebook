import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

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

    const contacts = this.state.contacts;
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    console.log(contacts, name);
    // if (contacts.length > 0) {
    contacts.forEach(contact => {
      if (contact.name === name) {
        return alert(`{name} is already in contacts.`);
      }
    });

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
        <h1>Phonebook</h1>
        <ContactForm handler={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter handler={this.handleBrowser} />
        {contactsStatus > 0 &&
          filteredContacts.map(contact => (
            <ContactList
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
