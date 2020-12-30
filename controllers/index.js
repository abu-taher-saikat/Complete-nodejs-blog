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



// @desc   Get Login page
// @route  GET /about
// @access Public
exports.getLoginPage = async (req, res, next) => {
    res.render('signin');
}


// @desc   Get register page
// @route  GET /about
// @access Public
exports.getRegisterPage = async (req, res, next) => {
    res.render('signup');
}


