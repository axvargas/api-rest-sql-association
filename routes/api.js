const express = require('express');
const router = express.Router();

const apiPostRouter = require('./api/post');
const apiProfileRouter = require('./api/profile');
const apiUserRouter = require('./api/user');

router.use('/post', apiPostRouter);
router.use('/profile', apiProfileRouter);
router.use('/user', apiUserRouter);


module.exports = router;
