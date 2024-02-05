const express = require('express');
const app = express();

const testRouter = require('../routs/testRouter');
app.use('/v1', testRouter); 