import User from 'src/models/User';

export const admin: User = {
  id: 1,
  username: 'adminuser',
  email: 'admin@example.com',
  password: 'admin123',
  name: 'Admin',
  surname: 'User',
  question: 'What is your favorite color?',
  answer: 'Blue',
  role: 'admin',
};

export const devops: User = {
  id: 2,
  username: 'devopsuser',
  email: 'devops@example.com',
  password: 'devops123',
  name: 'DevOps',
  surname: 'User',
  question: 'What is your favorite animal?',
  answer: 'Dog',
  role: 'devops',
};

export const developer: User = {
  id: 3,
  username: 'developer1',
  email: 'developer1@example.com',
  password: 'developer123',
  name: 'Developer1',
  surname: 'User',
  question: 'What is your favorite food?',
  answer: 'Pizza',
  role: 'developer',
};
