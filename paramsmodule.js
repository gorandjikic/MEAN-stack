module.exports=(app)=>{
app.get("/contact/:name/:dept",(req,res)=>{
  var name=req.params.name;
  console.log("Welcome "+name);
  console.log("You are working in "+dept);
  res.redirect("/");
});
app.get("/profile",(req,res)=>{

  console.log(req.query);
  res.redirect("/");
});

}
