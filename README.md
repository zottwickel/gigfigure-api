# Gig Figure API
This is the back-end code for https://www.gigfigure.com.

## Summary

This is a Node.js app made with Express, knex, pg, and other familiar node packages. It lives on Heroku at https://secret-basin-57769.herokuapp.com/ along with it's PostgreSQL database.

Tech used: JavaScript, Node.JS, PostgreSQL, Heroku, VSCode, JSON, Git.

## Endpoints

### POST /api/users

This endpoint allows for POST requests only to register a new user. The body of the response is generated from user inputs on the front end.

### POST /api/auth/login

This endpoint takes a POST request and returns a JWT representing the existing user. This JWT is used for authorization middleware when sent as part of protected endpoint requests.

### GET /api/contacts

This endpoint requires a JWT in the header under the "Authorization" key. It will return all of the contacts for the user associated with that JWT in JSON format.

### POST /api/contacts

This endpoint requires a JWT in the header under the "Authorization" key, and a new contact in the body of the request. It will return the new contact object in JSON format for the user associated with the JWT.

### GET /api/contacts/:contact_id

This endpoint requires a JWT in the header under the "Authorization" key. It will return the specific contact requested by the :contact_id parameter, as long as it is associated with the specific user.

### PATCH /api/contacts/:contact_id

This endpoint requires a JWT in the header under the "Authorization" key, and an updated contact in the body of the request. It will return the contact once updated, as long as the JWT is associated with the correct user.

### DELETE /api/contacts/:contact_id

This endpoint requires a JWT in the header under the "Authorization" key. It will return a success message if deletion is successful. It can only delete a contact for the correct user.

### GET /api/cases

This endpoint requires a JWT in the header under the "Authorization" key. It will return all of the cases in JSON format for the user associated with the JWT.

### POST /api/cases

This endpoint requires a JWT in the header under the "Authorization" key and a new case in the body of the request. It will return a success message upon the creation of the new case.