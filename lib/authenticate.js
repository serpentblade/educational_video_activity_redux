import uuid from 'uuid'

export function createUser ({ username, firstName, lastName }) {
  return {
    username,
    firstName,
    lastName,
    id: uuid.v1(),
    created_at: new Date(),
    mode: Math.ceil(Math.random() * 3)
  }
};

