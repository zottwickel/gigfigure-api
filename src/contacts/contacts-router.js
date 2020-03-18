const express = require('express');
const ContactsService = require('./contacts-service');
const { requireAuth } = require('../middleware/jwt-auth');

const contactsRouter = express.Router();
const jsonParser = express.json();

contactsRouter
  .route('/')
  .get(requireAuth, jsonParser, (req, res, next) => {
    const user_id = req.user.user_id;
    ContactsService.getContactsByUser(
      req.app.get('db'),
      user_id
    )
      .then(contacts => {
        res.json(ContactsService.serializeContacts(contacts));
      })
      .catch(next);
  })
  .post(requireAuth, jsonParser, (req, res, next) => {
    const { name, type, subtype, phone, email, notes, } = req.body;
    const user_id = req.user.user_id;

    const newContact = { user_id, name, type, subtype, phone, email, notes };

    for (const [key, value] of Object.entries(newContact)) {
      if ((key == 'name' || key == 'type') && value == null) {
        return res.status(400).json({
          error: { message: `Missing '${key}' in request body` }
        });
      }
    }
    ContactsService.insertContact(
      req.app.get('db'),
      newContact
    )
      .then(contact => {
        res
          .status(201)
          .json(ContactsService.serializeContact(contact));
      })
      .catch(next);
  });

contactsRouter
  .route('/:contact_id')
  .get(requireAuth, (req, res, next) => {
    ContactsService.getContactById(
      req.app.get('db'),
      req.params.contact_id
    )
    .then(contact => {
      if (!contact)
        return res.status(404).json({
          error: `Contact does not exist`
        });
      if (contact.user_id !== user.user_id)
        return res.status(401).json({
          error: 'Unauthorized request'
        });
      res.json(ContactsService.serializeContact(contact));
    })
    .catch(next);
  })
  .patch(requireAuth, jsonParser, (req, res, next) => {
    const { name, type, subtype, phone, email, notes, contact_id } = req.body;
    const user_id = req.user.user_id;

    if (req.body.user_id !== user_id)
      return res.status(401).json({
        error: { message: 'Unauthorized request'}
      });

    const updatedContact = { contact_id, user_id, name, type, subtype, phone, email, notes };
    ContactsService.updateContact(
      req.app.get('db'),
      updatedContact.contact_id,
      updatedContact
    )
    .then(rows => {
      res.status(204).json({
        message: `Contact ${contact_id} updated`
      });
    })
    .catch(next);
  })
  .delete(requireAuth, (req, res, next) => {
    ContactsService.deleteContact(
      req.app.get('db'),
      req.params.contact_id
    )
      .then(() => {
        res.status(204).json({
          message: `Contact ${req.params.contact_id} deleted`
        });
      })
      .catch(next);
  });

module.exports = contactsRouter;