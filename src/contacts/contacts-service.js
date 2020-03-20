const xss = require('xss');
/**
 * Sets up methods for handling contacts in the db.
 */
const ContactsService = {
  getContactsByUser(db, user_id) {
    return db
      .select('*')
      .from('contacts')
      .where('user_id', user_id);
  },
  getContactById(db, contact_id) {
    return db
      .select('*')
      .from('contacts')
      .where(contact_id)
      .first();
  },
  insertContact(db, newContact) {
    return db
      .insert(newContact)
      .into('contacts')
      .returning('*')
        .then(rows => rows[0]);
  },
  deleteContact(db, contact_id) {
    return db('contacts')
      .where({ contact_id })
      .delete();
  },
  updateContact(db, contact_id, newFields) {
    return db('contacts')
      .where({ contact_id })
      .update(newFields);
  },
  serializeContact(contact) {
    return {
      contact_id: contact.contact_id,
      name: xss(contact.name),
      type: xss(contact.type),
      subtype: xss(contact.subtype),
      phone: xss(contact.phone),
      email: xss(contact.email),
      notes: xss(contact.notes),
      date_modified: new Date(contact.date_modified),
      user_id: contact.user_id
    };
  },
  serializeContacts(contacts) {
    return contacts.map(contact => this.serializeContact(contact));
  },
};

module.exports = ContactsService;