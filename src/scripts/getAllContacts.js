import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('No contact found');
    } else {
      console.log('List of contacts:');
      console.log(contacts);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

getAllContacts();
