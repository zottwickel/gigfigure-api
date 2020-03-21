BEGIN;

TRUNCATE cases CASCADE;

ALTER SEQUENCE cases_case_id_seq RESTART;

INSERT INTO cases (case_notes, user_id)
VALUES
  ('This is the first case.', '955f6c01-a9f6-44bb-a7fd-75d1933f922e'),
  ('This is the second case', '955f6c01-a9f6-44bb-a7fd-75d1933f922e'),
  ('This is the third case', '955f6c01-a9f6-44bb-a7fd-75d1933f922e'),
  ('This is the fourth case', '955f6c01-a9f6-44bb-a7fd-75d1933f922e');

INSERT INTO casecontacts (contact_id, case_id)
VALUES
  ('22d72c1f-3e30-4dad-a2a0-8c9e90294493', '1'),
  ('b8808356-8f89-438e-a6ae-896c4e3644f6', '1'),
  ('5d3252d0-88b5-4d71-89da-89ccca969b9f', '2'),
  ('5d3252d0-88b5-4d71-89da-89ccca969b9f', '3'),
  ('b8808356-8f89-438e-a6ae-896c4e3644f6', '3'),
  ('c934aadf-009d-4d23-b987-aa6fedd6ecd8', '3'),
  ('c934aadf-009d-4d23-b987-aa6fedd6ecd8', '4');

COMMIT;