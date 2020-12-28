const mongoose = require('mongoose');
const slug = require("mongoose-slug-generator");
const domPurifier = require("domPurifier");
const {JSDOM} = require("jsdom");
const htmlPurify = domPurifier(new JSDOM().window);
const stripHtml = require("string-strip-html");

// Initialize slug
mongoose.plugin(slug);


const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author : {
        type: String,
        required : true,
    },
    description: {
        type : String
    },
    img:{
        type : String,
        default : "placeholder.jpg",
        required : false
    },
    snippet : {
        type: String,
    },
    slug : {
        type: String,
        slug : "title",
        unique : true,
        slug_padding_size : 2
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

BlogSchema.pre("validate", function(next){
    // Check if there is a description
    if(this.description){
        this.description = htmlPurify.sanitize(this.description);
        this.sinppet = stripHtml(this.description.substring(0, 200)).result
    }

    next();
})


module.exports = mongoose.model('Blog', BlogSchema);