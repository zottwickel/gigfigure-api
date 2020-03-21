const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe('Cases Endpoints', function () {
  let db;

  const testUsers = helpers.makeUsersArray();
  const testCases = helpers.makeCasesArray();
  const testCaseContacts = helpers.makeCaseContactsArray();
  const testContacts = helpers.makeContactsArray();

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());

  before('cleanup', () => helpers.truncateTables(db));

  afterEach('cleanup', () => helpers.truncateTables(db));

  describe(`GET /api/cases`, () => {
    beforeEach('insert cases', () => 
      helpers.seedTestDatabase(
        db,
        testUsers,
        testCaseContacts,
        testCases,
        testContacts
      )
    );

    it('responds 200 and all cases', () => {
      return supertest(app)
        .get('/api/cases')
        .set({ Authorization: process.env.TEST_AUTH_TOKEN})
        .expect(200);
    });
  });

});