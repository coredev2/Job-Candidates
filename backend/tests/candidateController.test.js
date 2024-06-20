const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const candidateRoutes = require('../routes/candidateRoutes');
const prisma = require('../__mocks__/prismaClient');  // Mocked Prisma client

const app = express();
app.use(bodyParser.json());
app.use('/api/candidates', candidateRoutes);

describe('Candidate Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new candidate', async () => {
    const createCandidateData = {
      firstName: 'John',
      lastName: 'Doe',
      phone: '1234567890',
      email: 'john.doe@example.com',
      callTime: '9 AM - 5 PM',
      linkedIn: 'https://www.linkedin.com/in/johndoe',
      gitHub: 'https://github.com/johndoe',
      comment: 'Great candidate!'
    };

    prisma.candidate.findUnique.mockResolvedValue(null);
    prisma.candidate.upsert.mockResolvedValue(createCandidateData);

    const response = await request(app)
      .post('/api/candidates')
      .send(createCandidateData)
      .expect(200);

    expect(response.body).toMatchObject(createCandidateData);
  });

  it('should update an existing candidate', async () => {
    const updateCandidateData = {
      firstName: 'John',
      lastName: 'Doe',
      phone: '123456789',
      email: 'john.doe@example.com',
      callTime: '10 AM - 6 PM',
      linkedIn: 'https://www.linkedin.com/in/johndoe',
      gitHub: 'https://github.com/johndoe',
      comment: 'Great candidate!'
    };

    prisma.candidate.findUnique.mockResolvedValue(updateCandidateData.email);
    prisma.candidate.upsert.mockResolvedValue(updateCandidateData);

    const response = await request(app)
      .post('/api/candidates')
      .send(updateCandidateData)
      .expect(200);

    expect(response.body).toMatchObject(updateCandidateData);
  });

  it('should return 500 if there is an error', async () => {
    const errorCandidateData = {
      firstName: 'John',
      lastName: 'Doe',
      phone: '1234567890',
      callTime: '9 AM - 5 PM',
      linkedIn: 'https://www.linkedin.com/in/johndoe',
      gitHub: 'https://github.com/johndoe',
      comment: 'Great candidate!'
    };

    prisma.candidate.upsert.mockRejectedValue(new Error('Database error'));

    const response = await request(app)
      .post('/api/candidates')
      .send(errorCandidateData)
      .expect(500);

    expect(response.body).toEqual({ error: 'Database error' });
  });
});
