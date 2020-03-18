const express = require('express');
const path = require('path');
const CasesService = require('./cases-service');
const { requireAuth } = require('../middleware/jwt-auth');
const uuid = require('uuid');

const casesRouter = express.Router();
const jsonParser = express.json();

casesRouter
  .route('/')
  .get(requireAuth, (req, res, next) => {
    CasesService.getCasesbyUser(
      req.app.get('db'),
      req.user.user_id
    )
      .then(cases => {
        res.json(CasesService.serializeCases(cases));
      })
      .catch(next);
  })
  .post(requireAuth, jsonParser, (req, res, next) => {
    const { case_notes, contacts } = req.body;
    const user_id = req.user.user_id;
    const newCase = { user_id, case_notes, contacts };

    if (contacts.length == 0)
      return res.status(400).json({
        error: { message: 'Missing Contacts Array' }
      });

    if (!case_notes)
      return res.status(400).json({
        error: { message: 'Missing Notes' }
      });
    
    CasesService.insertCase(
      req.app.get('db'),
      newCase
    )
      .then(singleCase => {
        res
          .status(201)
          .json({message: 'Case inserted'});
      })
      .catch(next);
  });
    

module.exports = casesRouter;