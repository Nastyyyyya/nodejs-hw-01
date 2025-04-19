import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (count) => {
  try {
    const existingContacts = await readContacts();

    const newContacts = Array.from({ length: count }, () =>
      createFakeContact(),
    );

    const updatedContacts = [...existingContacts, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(`Generated ${count} contacts`);
  } catch (error) {
    console.error('Error generating contacts:', error.message);
  }
};

const args = process.argv.slice(2);
const count = parseInt(args[0], 10);

if (!isNaN(count) && count > 0) {
  generateContacts(count);
} else {
  console.log(
    'Enter amount contacts for generating, for example: npm run generate 5',
  );
}
