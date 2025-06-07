const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const cakeRoutes = require('./routes/cakeRoutes');

const PORT = process.env.PORT || 5000;
const app = express();
connectDB();
app.use(cors());

app.use('/api/cakes', cakeRoutes);

app.listen(PORT, () => {
      console.log('Server running on port '+PORT)
});