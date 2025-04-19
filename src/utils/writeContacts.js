import { writeFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (contacts) => {
  try {
    const jsonData = JSON.stringify(contacts, null, 2);
    await writeFile(PATH_DB, jsonData, 'utf-8');
  } catch (error) {
    console.error('Помилка при записі у файл:', error.message);
  }
};
