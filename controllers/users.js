const ErrorResponse = require('./../utils/errorResponse');
const asyncHandler = require('./../middleware/async');
const User = require("../models/Users");


// @desc Get all users
// @route GET/users
// @access Public/Admin
exports.getUsers = asyncHandler(async(req,res,next)=>{
    res.status(200).json(req.advancedResults);
})