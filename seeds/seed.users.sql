BEGIN;

TRUNCATE users;

INSERT INTO users (user_id, user_name, email, password)
VALUES
  ('955f6c01-a9f6-44bb-a7fd-75d1933f922e', 'User One', 'userone@test.com', '$2a$12$YO.9oRT5vD76vu3aiygPm.NZm88anyulFqvSlVQWwk2Zye1lDQGxi'),
  ('8c8383c4-dba7-401e-ab71-b5889354b8ef', 'User Two', 'usertwo@test.com', '$2a$12$YO.9oRT5vD76vu3aiygPm.NZm88anyulFqvSlVQWwk2Zye1lDQGxi'),
  ('acb04dd9-425d-465e-b802-fee33ebe3459', 'User Three', 'userthree@test.com', '$2a$12$YO.9oRT5vD76vu3aiygPm.NZm88anyulFqvSlVQWwk2Zye1lDQGxi'),
  ('a8b1dba0-a39b-4f06-914e-c5fcd3ddc132', 'User Four', 'userfour@test.com', '$2a$12$YO.9oRT5vD76vu3aiygPm.NZm88anyulFqvSlVQWwk2Zye1lDQGxi');