const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const Date= require (__dirname + "/date.js");
let items = [" بیدار شدن از خواب",
    "ورزش",
    "صبحانه",
    "مطالعه",
    " استراحت"];
 let workItems=[];
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get("/", function (req, res) {
    res.render('list', {listValue:"home", typeOfList: Date.getDate(), newListItems: items,year:Date.getYear() });
})

app.get("/work",function(req,res){
    res.render("list",{listValue:"work", typeOfList : "لیست موارد کاری", newListItems:workItems,year:Date.getYear()});
})
app.get("/aboutUs",function(req,res){
    res.render("aboutUs",{});
})
app.post("/", function (req, res) {
    let item = req.body.newItem;
    if(req.body.list === "work")
    {
        workItems.push(item);
        res.redirect("/work")
    }
    else{
        items.push(item);
        res.redirect("/");
    }
   
})

app.listen(3000, function () {
    console.log("server is running on port 3000");
})