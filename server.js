const express = require('express');
const path = require('path');

const app = express();

// Define the directory where your static files (including HTML) are located
const publicDirectoryPath = path.join(__dirname, 'public');

// Serve static files from the public directory
app.use(express.static(publicDirectoryPath));

// Define a route to serve setup.html as the default path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'setup.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
