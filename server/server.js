const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;
const app = express();
connectDB();
app.use(cors());

app.get('/api', (req, res) => {
      res.json({ "objectss": ["objOne", "objTwo", "objThree"] })
});

app.listen(PORT, () => {
      console.log('Server running on port '+PORT)
});