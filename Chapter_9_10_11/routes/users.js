var express = require('express');
var router = express.Router();
const { registerUser } = require('../controller/userController');
// 1.
// @desc: Register a new user
// @route: POST /api/users
// @access: Public - return token
router.post('/', registerUser);

module.exports = router;
