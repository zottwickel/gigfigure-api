CREATE TABLE cases (
  case_id SERIAL PRIMARY KEY NOT NULL,
  case_notes TEXT NOT NULL,
  date TIMESTAMP NOT NULL DEFAULT now(),
  user_id UUID REFERENCES users(user_id)
    ON DELETE CASCADE NOT NULL
);

CREATE TABLE casecontacts (
  casecontact_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  case_id INTEGER REFERENCES cases(case_id)
    ON DELETE CASCADE NOT NULL,
  contact_id UUID REFERENCES contacts(contact_id)
    ON DELETE CASCADE NOT NULL
);