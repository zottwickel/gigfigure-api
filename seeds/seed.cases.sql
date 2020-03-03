BEGIN;

TRUNCATE cases CASCADE;

ALTER SEQUENCE cases_case_id_seq RESTART;

INSERT INTO cases (case_notes, user_id)
VALUES
  ('This is the first case.', '955f6c01-a9f6-44bb-a7fd-75d1933f922e'),
  ('This is the seccond case', '955f6c01-a9f6-44bb-a7fd-75d1933f922e'),
  ('This is the third case', '955f6c01-a9f6-44bb-a7fd-75d1933f922e'),
  ('This is the fourth case', '955f6c01-a9f6-44bb-a7fd-75d1933f922e');

INSERT INTO casecontacts (contact_id, case_id)
VALUES
  ('a33aab5d-b959-4360-8e17-f60effe37d64', '1'),
  ('d5b35839-3331-476e-87d9-ae835b02137d', '1'),
  ('5b1a71c8-049d-4acd-b622-2073db7bfda8', '2'),
  ('5b1a71c8-049d-4acd-b622-2073db7bfda8', '3'),
  ('d5b35839-3331-476e-87d9-ae835b02137d', '3'),
  ('8a4dc845-6799-4a93-9c33-e936da032e49', '3'),
  ('8a4dc845-6799-4a93-9c33-e936da032e49', '4');

COMMIT;