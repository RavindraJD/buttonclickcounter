var express=require("express");
var mongoose=require("mongoose");
var num=require("./ms.js");
var app=express();

app.set(express.static("p"));

mongoose.Promise=global.Promise;

var url="mongodb+srv://captainjacksparrow:captainjacksparrow@cluster0.jm9uo.mongodb.net/button?retryWrites=true&w=majority";

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(){
  console.log("sucess");
});

var item=new num({
  num: 0
});
item.save();

app.post("/click",function(req,res){
  mongoose.connection.collections.nums.findOneAndUpdate({},{$inc:{num:1}});

});


  app.get("/",function(req,res){
    res.sendFile(__dirname+"\\index.html");
  });


app.listen(process.env.PORT || 3000,function(){
  console.log("listening");
});

module.exports=app;
