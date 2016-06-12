var express=require('express');
var app=new express();
var port=3000;  
app.use(express.static(__dirname+"/public"));
var middleware={
    requireAuthentication: function(req,res,next){
        console.log("private route");
        next();
    },
    logger: function(req,res,next){
        console.log("logger");
        next();
    }
}

app.use(middleware.logger);
app.get('/about',middleware.requireAuthentication,function(req,res){
    res.send("about us  page");
})
app.listen(port,function(){
    console.log("server started on port : "+port);
});