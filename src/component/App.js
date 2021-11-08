import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from './Container/Container';
import ContactList from './ContactList/ContactList ';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import * as contactsOperations from './redux/contacts/contactsOperations';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContacts()));

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// // import { useEffect } from 'react';
// // import { useDispatch } from 'react-redux';
// import Container from './Container/Container';
// import ContactList from './ContactList/ContactList ';
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import * as contactsOperations from './redux/contacts/contactsOperations';

// class App extends Component {
//   // const dispatch = useDispatch();
//   // useEffect(() => dispatch(contactsOperations.fetchContacts()));
//   componentDidMount() {
//     this.props.fetchContacts();
//   }
//   render() {
//     return (
//       <Container>
//         <h1>Phonebook</h1>
//         <ContactForm />
//         <h2>Contacts</h2>
//         <Filter />
//         <ContactList />
//       </Container>
//     );
//   }
// }
// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });

// export default connect(null, mapDispatchToProps)(App);
