var express=require('express');
var app=new express();
var port=3000;  

var middleware=require('./middleware')

app.use(middleware.logger);
app.get('/about',middleware.requireAuthentication,function(req,res){
    res.send("about us  page");
})

app.use(express.static(__dirname+"/public"));
app.listen(port,function(){
    console.log("server started on port : "+port);
});