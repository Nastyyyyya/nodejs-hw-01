import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length > 0) {
      contacts.pop();

      await writeContacts(contacts);

      console.log('Last contact was deleted!');
    } else {
      console.log('There no contact to delete!');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

removeLastContact();
