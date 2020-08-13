var express=require("express");

var idata = require("../models/idata")
var Comment = require("../models/comments")
var router = express.Router();

router.get("/gallery/new",function(req,res){
	res.render("family/new.ejs");

})
router.get("/gallery",function(req,res){
idata.find({},function(err,i){
if(err){
	console.log(err);
}
else{
res.render("family/index.ejs",{data:i})	
}
});

});
router.post("/gallery",isLoggedIn,function(req,res){
	var name=req.body.name;
	var image=req.body.image;
	var description=req.body.description;
	var obj={name:name,image:image, description:description};
	idata.create(obj,function(err,i){
		if(err){
			console.log(err);
		}
		else{
			res.redirect("/gallery");
		}
	});
});

router.get("/gallery/:id",function(req,res){
	var id = req.params.id;
	idata.findById(id).populate("comments").exec(function(err,data){
		if(err){
			console.log(err);
		}
		else{
	res.render("family/show.ejs",{data:data});}
	});
});

router.get("/gallery/:id/edit",function(req,res){
	var id=req.params.id;
	idata.findById(id,function(err,data){
		if(err){
			console.log(err);
		}
		else{
			res.render("family/edit.ejs",{data:data});
		}
	});
	
});

router.put("/gallery/:id",function(req,res){
   	idata.findByIdAndUpdate(req.params.id,req.body.gallery,function(err,data){
   		if(err){
   			res.redirect("/gallery");
   		}
   		else{
   			res.redirect("/gallery/"+req.params.id);
   		}
   	});
});

router.delete("/gallery/:id",function(req,res){
	idata.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/gallery");
		}
		else{
			res.redirect("/gallery");
		}
	});
});

function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login")
}
 

module.exports = router;