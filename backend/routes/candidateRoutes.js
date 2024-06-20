const express = require('express');
const { addOrUpdateCandidate } = require('../controllers/candidateController');
const router = express.Router();

router.post('/', addOrUpdateCandidate);

module.exports = router;
