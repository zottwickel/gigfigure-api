CREATE TABLE contacts (
  contact_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  subtype TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  notes TEXT,
  date_modified TIMESTAMP NOT NULL DEFAULT now(),
  user_id UUID references users(user_id)
    ON DELETE CASCADE NOT NULL
);