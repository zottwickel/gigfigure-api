const app = require('./app');
const knex = require('knex');
const { PORT, DATABASE_URL } = require('./config');
/**
 * Sets up database connection through knex and listens for requests.
 */
const db = knex({
  client: 'pg',
  connection: DATABASE_URL
});

app.set('db', db);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});