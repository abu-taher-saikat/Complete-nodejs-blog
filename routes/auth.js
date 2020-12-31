const express = require('express');
const {
  register, login
} = require('../controllers/auth');

const router = express.Router();
// calling model here. 

router.route("/register").post(register);



module.exports = router;
