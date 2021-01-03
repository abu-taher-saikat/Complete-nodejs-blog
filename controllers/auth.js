
const crypto = require('crypto');
const ErrorResponse = require('./../utils/errorResponse');
const asyncHandler = require('./../middleware/async');
// const User = require('../models/Users');
const User = require('./../models/Users')

// @desc   Register user
// @route  POST /auth/register
// @access Public
exports.register = asyncHandler(async(req, res, next) => {
    const {name, email, password, role} = req.body;

    // Create user
    const user = await User.create({
        name, email, password, role
    })
    console.log(user);

    // Create token
    // res.status(200).json({success : true, token});
    sendTokenResponse(user, 200, res);
    // res.redirect('/dashboard');
});





// @desc   Login user
// @route  POST /auth/login
// @access Public
exports.login = asyncHandler(async(req, res, next) => {
    const {email, password} = req.body;
    console.log(req.body);

    // Validate email & password
    if(!email || !password){
        return next(new ErrorResponse('Please Provide an email and password', 400));
    }

    // Check if user
    const user = await User.findOne({
        email : email
    }).select('+password');

    // if no user 
    if(!user){
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    // check if password matches
    const isMatch = await user.matchPassword(password);

    if(!isMatch){
        return next(new ErrorResponse('Invalid credentials', 401));
    }
    // Create token
    // res.status(200).json({success : true, token});
    sendTokenResponse(user, 200, res);
    // res.redirect('/');
});


// @desc   Get Current logged in user
// @route  GET /auth/me
// @access Private
exports.getMe = asyncHandler(async(req, res, next)=>{
    const user = await User.findById(req.user.id);
    // console.log(user);
    res.status(200).json({
        success : true,
        data : user
    })
})



// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
    // Create token
    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true
    }
    if (process.env.NODE_ENV === 'production') {
        options.secure = true
    }

    res
        .status(statusCode)
        .cookie('token', token, options)
        .json({
            success: true,
            token
        })

    // res
    //     .status(statusCode)
    //     .cookie('token', token, options)
        
}