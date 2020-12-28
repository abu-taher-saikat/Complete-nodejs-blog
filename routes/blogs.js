const express = require('express');
const {
    getBlog
} = require('../controllers/blogs');
const router = express.Router();
// calling model here. 


router.route("/").get(getBlog);


module.exports = router;
