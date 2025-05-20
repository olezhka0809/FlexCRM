const express = require('express');
const router = express.Router();
const { registerAdmin, registerEmployee, login } = require('../controllers/authController');

router.post('/register/admin', registerAdmin);
router.post('/register/employee', registerEmployee);
router.post('/login', login);

module.exports = router;
