var mongoose=require("mongoose");
var idata=require("./models/idata");
var Comment=require("./models/comments")

data=[{name: "Pranshi Jain",
image:"https://lh3.googleusercontent.com/UFMVGCPahRhLJ-06fGhpxDoZtjEW9_602Z9Gcb18eLWLPSK9752nya1nwaJT4TLPcsPdemhkLdGvt57NUC2cHJpu6Wrjyb2d9uKHKc88pzPGXy5A9QvFjkO6E9MWrIrDIrJasgwKSpDko4PC7IwIDv21vhXHQGiRnAn-qJHtUP3JHM8wrbMPhzAfAdt2Je9qyiEYm6XTsV_J9EkbvG9SotvcUlEb3ROILIZoKOoHFTLSliNFapCaUYHRWvEpGTwbbeQ7ZrQJDYtLqBWizT64O5xEayhBIFKl8gzvd0QYNwGg0dLnMPKUIfBENotnztgrDiH6Ek21k5S5GQuVF1w5WxAsKS2xnERJfobXOu4mJfJLdYAqKIip2Twe6qzdsDJkunfBUqzKzlb-f8aDmDWGL_wKdbwCPMt9x4rR8ihsqk3Muj5cILYHJGxyQU6c22XmSSTSqVjTv3sjbjRkr-0QqnOPCBZgSLblU3kkwUQLchGN7dpLuP1RU_5Wz9yz8cMZnwQKumZuE6ioah0efI5y5i1uJNM5v5c9B1s7qEBFoifzcWkalWb2F8CrWB9PqrMqorAdtWjm-AAwtwsW2sFwLar6FimxZpQ0bVrTl5Qmr52ATYbor-_Jm3I49T_kGupkBsmNim4dGImVYsy203XNaqLwLeGio_kYM7pheLoiiv7Lpqb7_PdhL5rFAfoE=w143-h170-no",
description:"She is a person of melodius voice, my sister and I she would be successful if she focus in her music and studies than any other thing of life"
}
,{
	name:"Jitendra Jain",
	image:"https://lh3.googleusercontent.com/yUtftwz0jt0B2tWG-hLk5s6VjYDqnJ6RIkJ_JRTZeOK00I4ywev1ra8PngEOkk_DbGLD0Ph_SgYGf-QlhpWJC0UOCXuaC4i3NntsJeJlSJvsytHhb9G1G16IzBemxetQWyOSWW25_VVeHxb_0lVpvlc3TurSibhZ-MTsR1jAg4W6Me-klGjwLEoMVCL1d9RXu0huaTep36P-HXmp6lFIxGec-W_TuF8etShHnHghLM-ZAU8sZ2qlZiwxo_UiFDzi_pi63t5YOW_tnvNwMiWOZDRaTJwK_jZ7dXuWcQ-xlxqrdrGzY9qK-ziQY3DwDDLFsntSt6SLX49yGt2Sk-DzKVyGW0u59djZhAtCVZvZAoJD6EV2UAhdFqA8XWEBkYHBWkjOK7g28fsEh6jhIO36aDzNuktcYHiB0cvcVvlEMNwaVY9JpcAvoUfAMp14IdKV7GRaKXZ5vIUTNSUtUxCp42QI6On9nl4AqtJVb89PJl91d1QSYV3wTTqMg3DHhmGf2FJQDqdGJfvJHguhTXC_5iC9ycpLOhB1HgjSoRTIbGbSCXJ6ZMHoKruBjGeWLQY4G920e-ul2S3KA1HogVi44qUZkS2_r3i1xuGkb2VXRd-xhISBQ19uMspqq82S02Pe0Cy8gER-hNzinF7Da_voZe1ZIfp9CRE0vEdkTDZgVOtgB5pveY6ODnLIqNpx=w165-h220-no",
	description:"My father, he is man who values his family, friends and values in life over money"
},
{
	name:"Sushma Jain",
	image:"https://lh3.googleusercontent.com/W6lKI1kOJT5TMU29q7LLgW67qrm6xELVWM167ma-7ITAGdS7IbR59llJUrxnyEZwqQ7Dn30_h7cOqMmRqQk0bsECUGL32klg2qzt4aPFicJIsQwrm2DzegJ-Rsawc7Yq1dBZSJ8IEIv0ZAo0vpFiS0_ZoJCOay7Qk6EFOeDLYURLfN1py0dTEYsLv52LKOR3rhO4_HXKxoe05wBL5HNbwaY_iMe42kWhlk609ZEl6yHqp5Plt79VKpwBD6E6lhSYplo19QOQ1SbVR8qds2zDYTiWL8S8ER8KgxUYDB1cc4MIegI1SMbR_cY77O9IlsFdCwMDfVjckKORGZ6kJDPVQkHBadxM4mpD5Rbe99339WL0RX0OK_mYJkstNcElOTU1f1z8bfN8XlD0-q2DNjQTtMlWoqRpCOfy6b02TfAe2rDw_dBOvgGgmKhCpmCiTizgQo4OpdQ2ukImqUGKcyp5cHGu6WKbN8XVgFE44JeZgNVNej9Q5p432EI5WnY7G8l3sX_X8X95d3CORNdgGZDOSgkyDPn9a5cYjEV04uNliWnYq9iya1HGg_We6xd-zkIZnXle6PcqIWnPyTDbfu3xnsctEYWwZhrWQGObV0GNFPwAMLYozmo5Z8hXzuQ6txWtFTHyRuibcZsvv1g5NL1z37mjhneDFLlj3e7JN3XnpDscPnaW7jEUjUO6rynE=w878-h658-no",
	description:"She is my mother, very kind, religious, serious and caring women that I have ever met. A doctor Dr.Sushma Jain :)"
}
];

function seedDB(){
	idata.remove({},function(err){
		// if(err){
		// 	console.log(err);
		// }
		// console.log("removed all data!");
		// //add a few data
		// data.forEach(function(seed){
		// 	idata.create(seed,function(err, gallery){
		// 		if(err){
		// 			console.log(err);
		// 		}
		// 		else{

		// 					console.log("added a new data!");
		// 					//adding comment :}
		// 					Comment.create({
		// 						text:"This is a great, but I wish there was internet :/",
		// 						author:"Homer"
		// 							},function(err,comment){
		// 					if(err){
		// 							console.log(err);
		// 							}
		// 					else{
		// 							gallery.comments.push(comment);
		// 							gallery.save();
		// 							console.log("Created new comment")
		// 						}
		// 					});
		// 		}

		// 	});
		// })
	});
 }
module.exports=seedDB;