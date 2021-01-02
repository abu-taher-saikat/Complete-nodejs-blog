// @desc   Get Homepage
// @route  GET /
// @access Public
exports.getHomepage = async (req, res, next) => {
    const user = req.user;
    res.render('index',{
        user : user
    });
}

// @desc   Get Contact Page
// @route  GET /contact
// @access Public
exports.getContactpage = async (req, res, next) => {
    const user = req.user;
    res.render('contact',{
        user : user
    });
}


// @desc   Get About Page
// @route  GET /about
// @access Public
exports.getAboutpage = async (req, res, next) => {
    const user = req.user;
    res.render('about',{
        user : user
    });
}



// @desc   Get Login page
// @route  GET /about
// @access Public
exports.getLoginPage = async (req, res, next) => {
    const user = req.user;
    res.render('signin',{
        user : user
    });
}


// @desc   Get register page
// @route  GET /about
// @access Public
exports.getRegisterPage = async (req, res, next) => {
    const user = req.user;
    res.render('signup',{
        user : user
    });
}


