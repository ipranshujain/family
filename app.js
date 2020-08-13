var express                =require("express"),
	bodyParser             =require("body-parser"),
	passport               =require("passport"),
	LocalStrategy          =require("passport-local"),
	passportLocalMongoose  =require("passport-local-mongoose"),
	mongoose               =require("mongoose"),
	methodOverride         =require("method-override");


var galleryRoutes          =require("./routes/gallery"),
	commentRoutes          =require("./routes/comment");
	indexRoutes            =require("./routes/index");
// 	var session = require('express-session')
// var MemoryStore = require('memorystore')(session)
 

var Comment=require("./models/comments"),
	idata  =require("./models/idata"),
	User   =require("./models/user"),
	seedDB =require("./seeds");



var app=express();
	app.use(express.static("public"));
	app.set("view engine","ejs");
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(methodOverride("_method"));



    //Password Configuration
    app.use(require("express-session")(
    {
    	secret: "I have changed password for security purpose",
    	resave: false,
    	saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
    
     //To Check For CurrentUser and display login or logout or register accordingly
    app.use(function(req,res,next){
    	res.locals.currentUser = req.user;
    	next();
    });

    app.use(commentRoutes);
    app.use(galleryRoutes);
    app.use(indexRoutes);

   mongoose.set('useUnifiedTopology', true);
   // mongoose.connect("mongodb://localhost/family", { useNewUrlParser: true });
   mongoose.connect("I have removed this url for security purpose");
 



//seedDB();


//process.env.PORT||


app.listen(process.env.PORT||4003,function(){
	console.log("Server Started")
});











