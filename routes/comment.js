var express=require("express");
var idata = require("../models/idata");
var Comment = require("../models/comments");
var router = express.Router({mergeParams : true});


router.get("/gallery/:id/comments/new",isLoggedIn,function(req,res){
	idata.findById(req.params.id,function(err,data){
		if(err){
			console.log(err);
		}
		else{
			res.render("comment/new",{data:data});
		}
	});
	
});

router.post("/gallery/:id/comments",isLoggedIn,function(req,res){
	
	idata.findById(req.params.id,function(err,data){
		if(err){
			console.log(err);
		}
		else{
			Comment.create(req.body.comment,function(err,comment){
		if(err){
			console.log(err);
		}
		else{
			comment.author.id  = req.user._id;
			comment.author.username = req.user.username;
			comment.save();
			data.comments.push(comment);
			data.save();
			res.redirect("/gallery/"+data.id);
		}
	})
		}
	})

	
});
function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login")
}

module.exports = router;