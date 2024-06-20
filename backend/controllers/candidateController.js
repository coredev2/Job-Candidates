const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.addOrUpdateCandidate = async (req, res) => {
  const candidateData = req.body;

  try {
    // Check if the candidate already exists
    const existingCandidate = await prisma.candidate.findUnique({
      where: { email: candidateData.email }
    });

    if (existingCandidate) {
      // Update existing candidate
      const updatedCandidate = await prisma.candidate.update({
        where: { email: candidateData.email },
        data: candidateData
      });
      return res.status(200).json(updatedCandidate);
    } else {
      // Create new candidate
      const newCandidate = await prisma.candidate.create({
        data: candidateData
      });
      return res.status(201).json(newCandidate);
    }
  } catch (error) {
    return res.status(500).json({ error: 'Database error' });
  }
};
