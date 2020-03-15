# Gig Figure API
This is the back-end code for https://www.gigfigure.com.

## Summary

This is a Node.js app made with Express, knex, pg, and other familiar node packages. It lives on Heroku at https://secret-basin-57769.herokuapp.com/ along with it's PostgreSQL database.

Tech used: JavaScript, Node.JS, PostgreSQL, Heroku, VSCode, JSON, Git.

## Endpoints

### /api/users

This endpoint allows for POST requests only to register a new user. The body of the response is generated from user inputs on the front end.

### /api/auth/login

This endpoint takes a POST request and returns a JWT representing the existing user. This JWT is used for authorization middleware when sent as part of protected endpoint requests.

### /api/contacts

This endpoint has standard CRUD operations for making requests to the server for the contacts resource. It is only accessable with a JWT associated with a user.

### /api/cases

This endpoint handles cases. At this point it is only a GET and POST endpoint, and will return the cases and contacts under each case. It requires a JWT to access.