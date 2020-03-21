BEGIN;

TRUNCATE contacts CASCADE;

INSERT INTO contacts (contact_id, name, type, subtype, phone, email, notes, user_id)
VALUES
  ('22d72c1f-3e30-4dad-a2a0-8c9e90294493', 'Joe Shmo', 'Musician', 'Whistlter', '555-555-5555', 'joe@schmo.com', 'whistling guy from open mic', '955f6c01-a9f6-44bb-a7fd-75d1933f922e'),
  ('b8808356-8f89-438e-a6ae-896c4e3644f6', 'Jill Manill', 'Supporter', 'Hype Woman', '555-555-5555', 'jill@shill.com', 'will advertize gigs on instagram, however she can get really hyper', '955f6c01-a9f6-44bb-a7fd-75d1933f922e'),
  ('5d3252d0-88b5-4d71-89da-89ccca969b9f', 'Rodger Greenboro', 'Bar Owner', 'The Lavendar Pig', '555-555-5555', 'rodger@thelavendarpig.com', 'Owns Lavendar pig. Likes our sound', '955f6c01-a9f6-44bb-a7fd-75d1933f922e'),
  ('c934aadf-009d-4d23-b987-aa6fedd6ecd8', 'Drake Snake', 'Curator', 'Museums of Albany Foundation', '555-555-5555', 'admin@albonyfound.org', 'Contact for the museums foundation, wants to hire us for a gallery showing', '955f6c01-a9f6-44bb-a7fd-75d1933f922e');

COMMIT;