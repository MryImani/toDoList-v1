const bodyParser = require('body-parser');
const express=require('express');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    var today=new Date();
    if(today.getDay()=== 5)
    {
        res.send("Yeh, it's the weekend!")
    }
    else{
        res.send("Boo! I have to work!");
    }
    
})





app.listen(3000,function(){
    console.log("server is running on port 3000");
})