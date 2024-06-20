const express = require('express');
const bodyParser = require('body-parser');
const candidateRoutes = require('./routes/candidateRoutes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/api/candidates', candidateRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
