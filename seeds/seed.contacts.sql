BEGIN;

TRUNCATE contacts CASCADE;

INSERT INTO contacts (name, type, subtype, phone, email, notes, user_id)
VALUES
  ('Joe Shmo', 'Musician', 'Whislter', '555-555-5555', 'joe@schmo.com', 'whisling guy from open mic', '955f6c01-a9f6-44bb-a7fd-75d1933f922e'),
  ('Jill Manill', 'Supporter', 'Hype Woman', '555-555-5555', 'jill@shill.com', 'will advertize gigs on instagram, however she can get really hyper', '955f6c01-a9f6-44bb-a7fd-75d1933f922e'),
  ('Rodger Greenboro', 'Bar Owner', 'The Lavendar Pig', '555-555-5555', 'rodger@thelavendarpig.com', 'Owns Lavendar pig. Likes our sound', '955f6c01-a9f6-44bb-a7fd-75d1933f922e'),
  ('Drake Snake', 'Curator', 'Museums of Albany Foundation', '555-555-5555', 'admin@albonyfound.org', 'Contact for the museums foundation, wants to hire us for a gallery showing', '955f6c01-a9f6-44bb-a7fd-75d1933f922e');

COMMIT;