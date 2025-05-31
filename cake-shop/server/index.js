const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())

app.get('/', (req, res) => {
      res.send('Hello from our server!')
})

app.listen(PORT, () => {
      console.log('server listening on port '+PORT)
})