// @desc   Get blog page
// @route  GET /blog
// @access Public
exports.getBlog = async (req, res, next) => {
    res.render('blog');
}