// index.js
const express = require('express');
const router1 = require('./mintclub/mintclub'); //http://localhost:3000/mintclub/

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/mintclub', router1);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});