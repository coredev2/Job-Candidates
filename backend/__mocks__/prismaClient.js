const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

jest.mock('@prisma/client', () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => {
      return {
        candidate: {
          findUnique: jest.fn(),
          upsert: jest.fn(),
        },
      };
    }),
  };
});

module.exports = prisma;
