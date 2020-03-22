/**
 * Helper methods for tests.
 */
function makeUsersArray(newDate) {
  return [
    {
      user_id: '955f6c01-a9f6-44bb-a7fd-75d1933f922e',
      user_name: 'user1',
      email: 'userone@test.com',
      password: 'password',
      date_created: newDate,
      date_modified: newDate
    },
    {
      user_id: '8c8383c4-dba7-401e-ab71-b5889354b8ef',
      user_name: 'user2',
      email: 'usertwo@test.com',
      password: 'password',
      date_created: newDate,
      date_modified: newDate
    },
    {
      user_id: 'acb04dd9-425d-465e-b802-fee33ebe3459',
      user_name: 'user3',
      email: 'userthree@test.com',
      password: 'password',
      date_created: newDate,
      date_modified: newDate
    },
    {
      user_id: 'a8b1dba0-a39b-4f06-914e-c5fcd3ddc132',
      user_name: 'user4',
      email: 'userfour@test.com',
      password: 'password',
      date_created: newDate,
      date_modified: newDate
    },
  ];
}
function makeContactsArray(newDate) {
  return [
    {
      contact_id: '22d72c1f-3e30-4dad-a2a0-8c9e90294493',
      name: 'Joe Shmo',
      type: 'Musician',
      subtype: 'Whistler',
      phone: '555-555-5555',
      email: 'joe@schmo.com',
      notes: 'whistling guy from open mic',
      user_id: '955f6c01-a9f6-44bb-a7fd-75d1933f922e',
      date_modified: newDate
    },
    {
      contact_id: 'b8808356-8f89-438e-a6ae-896c4e3644f6',
      name: 'Jill Manill',
      type: 'Supporter',
      subtype: 'Hype Woman',
      phone: '555-555-5555',
      email: 'jill@shill.com',
      notes: 'will advertize gigs on instagram, however she can get really hyper',
      user_id: '955f6c01-a9f6-44bb-a7fd-75d1933f922e',
      date_modified: newDate
    },
    {
      contact_id: '5d3252d0-88b5-4d71-89da-89ccca969b9f',
      name: 'Rodger Greenboro',
      type: 'Bar Owner',
      subtype: 'The Lavender Pig',
      phone: '555-555-5555',
      email: 'rodger@thelavendarpig.com',
      notes: 'Owns Lavender pig. Likes our sound',
      user_id: '955f6c01-a9f6-44bb-a7fd-75d1933f922e',
      date_modified: newDate
    },
    {
      contact_id: 'c934aadf-009d-4d23-b987-aa6fedd6ecd8',
      name: 'Drake Snake',
      type: 'Curator',
      subtype: 'Museums of Albany Foundation',
      phone: '555-555-5555',
      email: 'admin@albonyfound.org',
      notes: 'Contact for the museums foundation, wants to hire us for a gallery showing',
      user_id: '955f6c01-a9f6-44bb-a7fd-75d1933f922e',
      date_modified: newDate
    }
  ];
}
function makeCaseContactsArray() {
  return [
    {
      contact_id: '22d72c1f-3e30-4dad-a2a0-8c9e90294493',
      case_id: '1'
    },
    {
      contact_id: 'b8808356-8f89-438e-a6ae-896c4e3644f6',
      case_id: '1'
    },
    {
      contact_id: '5d3252d0-88b5-4d71-89da-89ccca969b9f',
      case_id: '2'
    },
    {
      contact_id: '5d3252d0-88b5-4d71-89da-89ccca969b9f',
      case_id: '3'
    },
    {
      contact_id: 'b8808356-8f89-438e-a6ae-896c4e3644f6',
      case_id: '3'
    },
    {
      contact_id: 'c934aadf-009d-4d23-b987-aa6fedd6ecd8',
      case_id: '3'
    },
    {
      contact_id: 'c934aadf-009d-4d23-b987-aa6fedd6ecd8',
      case_id: '4'
    }
  ];
}
function makeCasesArray(newDate) {
  return [
    {
      case_id: 1,
      case_notes: 'This is the first case.',
      user_id: '955f6c01-a9f6-44bb-a7fd-75d1933f922e',
      date: newDate,
    },
    {
      case_id: 2,
      case_notes: 'This is the second case',
      user_id: '955f6c01-a9f6-44bb-a7fd-75d1933f922e',
      date: newDate,
    },
    {
      case_id: 3,
      case_notes: 'This is the third case',
      user_id: '955f6c01-a9f6-44bb-a7fd-75d1933f922e',
      date: newDate,
    },
    {
      case_id: 4,
      case_notes: 'This is the fourth case',
      user_id: '955f6c01-a9f6-44bb-a7fd-75d1933f922e',
      date: newDate,
    }
  ];
}

function seedTestDatabase(db, users, casecontacts, cases, contacts) {
  return db
    .into('users')
    .insert(users)
    .then(() => 
      db
        .into('cases')
        .insert(cases)
    )
    .then(() => 
      db
        .into('contacts')
        .insert(contacts)
    )
    .then(() => 
      db
        .into('casecontacts')
        .insert(casecontacts)
    );
}

function truncateTables(db) {
  return db.raw(
    `TRUNCATE
      users,
      cases,
      casecontacts,
      contacts;
      
      ALTER SEQUENCE cases_case_id_seq RESTART`
  );
}

function makeExpectedCases(newDate) {
  return [
    { 
      case_id: 4,
      case_notes: 'This is the fourth case',
      date: newDate,
      user_id: '955f6c01-a9f6-44bb-a7fd-75d1933f922e',
      contacts: [
        {
          contact_id: "c934aadf-009d-4d23-b987-aa6fedd6ecd8",
          name: "Drake Snake",
          type: "Curator",
          subtype: "Museums of Albany Foundation",
          phone: "555-555-5555",
          email: "admin@albonyfound.org",
          notes: "Contact for the museums foundation, wants to hire us for a gallery showing",
          date_modified: newDate
        }
      ]
    },
    { 
      case_id: 3,
      case_notes: 'This is the third case',
      date: newDate,
      user_id: '955f6c01-a9f6-44bb-a7fd-75d1933f922e',
      contacts: [
        {
          contact_id: '5d3252d0-88b5-4d71-89da-89ccca969b9f',
          name: 'Rodger Greenboro',
          type: 'Bar Owner',
          subtype: 'The Lavender Pig',
          phone: '555-555-5555',
          email: 'rodger@thelavendarpig.com',
          notes: 'Owns Lavender pig. Likes our sound',
          date_modified: newDate
        },
        {
          contact_id: 'b8808356-8f89-438e-a6ae-896c4e3644f6',
          name: 'Jill Manill',
          type: 'Supporter',
          subtype: 'Hype Woman',
          phone: '555-555-5555',
          email: 'jill@shill.com',
          notes: 'will advertize gigs on instagram, however she can get really hyper',
          date_modified: newDate
        },
        {
          contact_id: "c934aadf-009d-4d23-b987-aa6fedd6ecd8",
          name: "Drake Snake",
          type: "Curator",
          subtype: "Museums of Albany Foundation",
          phone: "555-555-5555",
          email: "admin@albonyfound.org",
          notes: "Contact for the museums foundation, wants to hire us for a gallery showing",
          date_modified: newDate
        }
      ]
    },
    { 
      case_id: 2,
      case_notes: 'This is the second case',
      date: newDate,
      user_id: '955f6c01-a9f6-44bb-a7fd-75d1933f922e',
      contacts: [ 
        {
          contact_id: "5d3252d0-88b5-4d71-89da-89ccca969b9f",
          name: "Rodger Greenboro",
          type: "Bar Owner",
          subtype: "The Lavender Pig",
          phone: "555-555-5555",
          email: "rodger@thelavendarpig.com",
          notes: "Owns Lavender pig. Likes our sound",
          date_modified: newDate
        }
      ] 
    },
    { case_id: 1,
      case_notes: 'This is the first case.',
      date: newDate,
      user_id: '955f6c01-a9f6-44bb-a7fd-75d1933f922e',
      contacts: [ 
        {
          contact_id: '22d72c1f-3e30-4dad-a2a0-8c9e90294493',
          name: 'Joe Shmo',
          type: 'Musician',
          subtype: 'Whistler',
          phone: '555-555-5555',
          email: 'joe@schmo.com',
          notes: 'whistling guy from open mic',
          date_modified: newDate
        },
        {
          contact_id: 'b8808356-8f89-438e-a6ae-896c4e3644f6',
          name: 'Jill Manill',
          type: 'Supporter',
          subtype: 'Hype Woman',
          phone: '555-555-5555',
          email: 'jill@shill.com',
          notes: 'will advertize gigs on instagram, however she can get really hyper',
          date_modified: newDate
        }
      ]
    }
  ];
}

function makeExpectedContacts(newDate) {
  return [
    { 
      contact_id: '22d72c1f-3e30-4dad-a2a0-8c9e90294493',
      name: 'Joe Shmo',
      type: 'Musician',
      subtype: 'Whistler',
      phone: '555-555-5555',
      email: 'joe@schmo.com',
      notes: 'whistling guy from open mic',
      date_modified: newDate,
      user_id: '955f6c01-a9f6-44bb-a7fd-75d1933f922e' 
    },
    { 
      contact_id: 'b8808356-8f89-438e-a6ae-896c4e3644f6',
      name: 'Jill Manill',
      type: 'Supporter',
      subtype: 'Hype Woman',
      phone: '555-555-5555',
      email: 'jill@shill.com',
      notes: 'will advertize gigs on instagram, however she can get really hyper',
      date_modified: newDate,
      user_id: '955f6c01-a9f6-44bb-a7fd-75d1933f922e'
    },
    { 
      contact_id: '5d3252d0-88b5-4d71-89da-89ccca969b9f',
      name: 'Rodger Greenboro',
      type: 'Bar Owner',
      subtype: 'The Lavender Pig',
      phone: '555-555-5555',
      email: 'rodger@thelavendarpig.com',
      notes: 'Owns Lavender pig. Likes our sound',
      date_modified: newDate,
      user_id: '955f6c01-a9f6-44bb-a7fd-75d1933f922e'
    },
    { 
      contact_id: 'c934aadf-009d-4d23-b987-aa6fedd6ecd8',
      name: 'Drake Snake',
      type: 'Curator',
      subtype: 'Museums of Albany Foundation',
      phone: '555-555-5555',
      email: 'admin@albonyfound.org',
      notes: 'Contact for the museums foundation, wants to hire us for a gallery showing',
      date_modified: newDate,
      user_id: '955f6c01-a9f6-44bb-a7fd-75d1933f922e'
    }
  ];
}

module.exports = {
  makeUsersArray,
  makeContactsArray,
  makeCasesArray,
  makeCaseContactsArray,
  truncateTables,
  seedTestDatabase,
  makeExpectedCases,
  makeExpectedContacts
};