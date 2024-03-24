// index.js
const express = require('express');
const cors = require('cors');
const router1 = require('./mintclub/mintclub'); //http://localhost:3000/mintclub/
const router2 = require('./circle/circle'); //http://localhost:3000/mintclub/

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '45.76.188.177'
// const HOST = 'localhost'

// Use the cors middleware
app.use(cors());

app.use(express.json());

app.use('/mintclub', router1);
app.use('/circle', router2);

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});