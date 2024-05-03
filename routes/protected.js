const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const { userProfile } = require('../controllers/protectedController');

router.get('/profile', authenticate, userProfile);

module.exports = router;
