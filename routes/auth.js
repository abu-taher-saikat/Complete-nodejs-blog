const express = require('express');
const {
  register, login , getMe
} = require('../controllers/auth');


const {protect} = require('./../middleware/auth');
// const { route } = require('./blogs');

const router = express.Router();
// calling model here.  

router.route("/register").post(register);
router.route("/login").post(login);
// router.route("/profile").get(protect, getMe);
router.get('/me', protect, getMe);
// router.get("/profile", getMe);



module.exports = router;
