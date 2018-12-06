module.exports=(app)=>{
  app.get("/",(req,res)=>{
    res.send("Welcome to the home page");
  });
  app.get("/welcome",(req,res)=>{
    res.send("Welcome page");
  });
}
