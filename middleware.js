var middleware={
    requireAuthentication: function(req,res,next){
        console.log("private route");
        next();
    },
    logger: function(req,res,next){
        console.log("logger : "+new Date().toString()+"  "+req.method+"  "+req.originalUrl);
        next();
    }
}
module.exports=middleware;