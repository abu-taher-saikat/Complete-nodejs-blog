const express = require("express");
const User = require('../models/Users');


const {getUsers} = require('../controllers/users');

const router = express.Router({mergeParams : true});

const {protect, authorize } = require('../middleware/auth');
const advancedResults = require('../middleware/advancedResults');

router.use(protect);
router.route('/').get(getUsers)