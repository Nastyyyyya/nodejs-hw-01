import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();

    console.log(`Number of contacts: ${contacts.length}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

countContacts();
