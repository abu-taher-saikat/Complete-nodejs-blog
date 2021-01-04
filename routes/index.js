const express = require('express');
const {
    getHomepage, getContactpage , getAboutpage , getLoginPage, getRegisterPage
} = require('../controllers/index');
const router = express.Router();
// calling model here. 

const {protect } = require('./../middleware/auth');


router.route("/").get(getHomepage);
router.route("/contact").get(getContactpage);
router.route("/about").get(getAboutpage);
router.route("/login").get(getLoginPage);
router.route("/register").get(getRegisterPage);


module.exports = router;
