// Import the Express module
const express = require('express');
const dotenv = require('dotenv');
const TestService = require('./service/testService');

// Load environment variables from .env file
dotenv.config();

// Access the port number from environment variables or use a default value
const PORT = process.env.PORT || 5000; // Set default port if PORT is not defined

// Create an instance of the Express application
const app = express();

const testRouter = require('../git_tuts/routs/testRouter');
app.use('/v1', testRouter); 

const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.mysql_host,
  user: process.env.mysql_user,
  password: process.env.mysql_password,
  database: ''
});

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed: ' + err.message);
  } else {
    console.log('Connected to the database');
    connection.release(); // Release the connection
  }
});


// Set up the server to listen on the specified port
const server = app.listen(PORT, () => {
    console.log('Hello...server started...!!!')
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Handle closing the server gracefully
process.on('SIGINT', () => {
    server.close(() => {
        console.log('Server stopped...!!!');
        console.log(process.pid);
        process.exit(0);
    });
});
