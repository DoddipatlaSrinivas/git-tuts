// Import the Express module
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Access the port number from environment variables or use a default value
const PORT = process.env.PORT || 5000; // Set default port if PORT is not defined

// Create an instance of the Express application
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Set up the server to listen on the specified port
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('server started...!!!')
});

// Handle closing the server gracefully
process.on('SIGINT', () => {
    server.close(() => {
        console.log('Server stopped...!!!');
        console.log(process.pid);
        process.exit(0);
    });
});
