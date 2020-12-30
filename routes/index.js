const express = require('express');
const {
    getHomepage, getContactpage , getAboutpage , getLoginPage, getRegisterPage
} = require('../controllers/index');
const router = express.Router();
// calling model here. 


router.route("/").get(getHomepage);
router.route("/contact").get(getContactpage);
router.route("/about").get(getAboutpage);
router.route("/login").get(getLoginPage);
router.route("/register").get(getRegisterPage);


module.exports = router;
