const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');

// Define routes
router.get('/numbers', testController.testController);

module.exports = router;
