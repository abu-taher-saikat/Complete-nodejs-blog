// @desc   Get blog page
// @route  GET /blog
// @access Public
exports.getBlog = async (req, res, next) => {
    const user = req.user;
    res.render('blog',{
        user : user
    });
}