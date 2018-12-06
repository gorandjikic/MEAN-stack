var express=require("express");
var app=express();
var routes=require("./routes");
var paramsmodule=require("./paramsmodule");
routes(app);
paramsmodule(app);
app.listen(3000);
