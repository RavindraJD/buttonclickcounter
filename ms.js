var mongoose=require("mongoose");
var mongodb=require("mongodb");
var Schema=mongoose.Schema;

var numschema=Schema({
  num: Number
});
var num=mongoose.model("num",numschema);
module.exports=num;
