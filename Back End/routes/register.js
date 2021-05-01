const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const register = require('../controllers/register.js')


router.route('/')
    .post(catchAsync(register.createNewregister));

router.get('/new', register.renderNewregisterForm);
router.get('/show', register.renderShow);
router.post('/new', register.renderconfirmForm);

module.exports = router;