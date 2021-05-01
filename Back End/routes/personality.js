const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');

const personality = require('../controllers/personality');

router.route('/')
    .get(catchAsync(personality.questions))
    .post(catchAsync(personality.result));

router.route('/result/:perRes')
    .get(catchAsync(personality.ans));

module.exports = router;