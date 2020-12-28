const express = require('express');
const {
    getHomepage, getContactpage , getAboutpage
} = require('../controllers/index');
const router = express.Router();
// calling model here. 


router.route("/").get(getHomepage);
router.route("/contact").get(getContactpage);
router.route("/about").get(getAboutpage);


module.exports = router;
