const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require("colors");
// const cookieParser = require('cookie-parser');
// const fileUpload  = require('express-fileupload');
// Load env vars 
dotenv.config({path : './config/config.env'});

// Database.. 
const connectDB = require('./config/db');
connectDB();

// Route files
const blogs = require("./routes/blogs");
const index = require("./routes/index");
const users = require("./routes/users");

const app = express();


// Set Static folder
app.use(express.static(path.join(__dirname, 'public')));
// set view engine
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));


// Dev loggin middleware.
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}


// Mount routes
app.use('/', index)
app.use('/blog', blogs);
// app.use('/users', users);



const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`App listening on port ${process.env.NODE_ENV} and port on ${PORT} !`.yellow);
});


// Handle unhandled promise rejection.
process.on('unhandledRejection', (err, promise)=>{
    console.log(`Error: ${err.message}`.white.bold);
    // Close server and exit process
    server.close(()=> process.exit(1));
})