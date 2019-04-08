//requirements needed 
require('./db');
require('./auth');
const session = require('express-session');
const express = require('express');
const passport = require('passport');
const app = express();

//allows us to serve static files from public directory
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//use to bring in handlebars for templating
app.set('view engine', 'hbs');

//allows us to read the body of request object
app.use(express.urlencoded({ extended: false }));

//Given in slides from ait website
const sessionOptions = {
	secret: 'secret cookie thang (store this elsewhere!)',
	resave: true,
	saveUninitialized: true
};
app.use(session(sessionOptions));

//start up passport and allow login sessions
app.use(passport.initialize());
app.use(passport.session());

//make user data available to all templates.
app.use(function(req, res, next){
	res.locals.user = req.user;
	next();
});

//register routes
app.use("/", require("./routes"));

//Listen on port or production
app.listen(process.env.PORT || 3000);