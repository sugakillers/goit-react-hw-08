import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact.jsx';
import Notification from '../Notification/Notification.jsx';
import { Grid } from '@mui/material';
import {
  selectContacts,
  selectFilteredContacts,
} from '../../redux/contacts/selectors.js';


const ContactList = ({ handleEditContact }) => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  if (!contacts.length) return <Notification title={'No contacts yet'} />;

  if (!filteredContacts.length)
    return <Notification title={'Contacts are not found'} />;

  return (
    <Grid container spacing={3} sx={{ mt: 3 }}>
      {filteredContacts.map(({ id, name, number }) => (
        <Grid item key={id} xs={11} alignItems="flex-start">
          <Contact
            id={id}
            name={name}
            number={number}
            handleEditContact={handleEditContact}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ContactList;