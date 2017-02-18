var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  //res.sendFile(path + "index.html");
  res.send("Hello World!");
});
/*
router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});
*/

app.use("/",router);

app.use("*",function(req,res){
  //res.sendFile(path + "404.html");
  res.send("404 Errror");
});

app.listen(3000,function(){
  console.log("Server Live at Port : 3000");
});




/*
 * 
 * Tutorial #1 : https://www.codementor.io/codeforgeek/build-website-from-scratch-using-expressjs-and-bootstrap-du107sby7\
 * Tutorial #2 : https://zellwk.com/blog/crud-express-mongodb/
 * Tutorial #3 : https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
 * 
 */