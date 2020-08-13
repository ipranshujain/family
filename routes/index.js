var express=require("express");
var passport = require("passport");

var idata = require("../models/idata");
var Comment = require("../models/comments");
var User = require("../models/user");
var router = express.Router();

router.get("/",function(req,res){
	res.render("home.ejs"); 
});




//REGISTER

router.get("/register",function(req,res)
{
	res.render("register");
});

router.post("/register",function(req,res)
{
	var newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, function(err, user){
		if(err){
			console.log(err);
			return res.render("register");
		}
		passport.authenticate("local")(req,res, function(){
			res.redirect("/gallery");
		});
	})	
});

//LOGIN
router.get("/login",function(req,res){
	res.render("login");
});
router.post("/login",passport.authenticate("local",{
	successRedirect:"/gallery",
	failureRedirect:"/login"
}),function(req,res){

});

//LOGOUT
router.get("/logout",function(req,res){
	req.logout();
	res.redirect("/gallery");
});

function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login")
}
module.exports=router;
