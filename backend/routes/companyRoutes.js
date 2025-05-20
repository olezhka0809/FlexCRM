const express = require('express');
const router = express.Router();
const { getCompanyDetails } = require('../controllers/companyController');

router.get('/company/:id', getCompanyDetails);

module.exports = router;
