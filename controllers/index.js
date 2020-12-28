// @desc   Get Homepage
// @route  GET /
// @access Public
exports.getHomepage = async (req, res, next) => {
    res.render('index');
}

// @desc   Get Contact Page
// @route  GET /contact
// @access Public
exports.getContactpage = async (req, res, next) => {
    res.render('contact');
}


// @desc   Get About Page
// @route  GET /about
// @access Public
exports.getAboutpage = async (req, res, next) => {
    res.render('about');
}