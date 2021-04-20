const bodyParser = require('body-parser');
const express = require('express');
const app = express();
let items = [" بیدار شدن از خواب",
    "ورزش",
    "صبحانه",
    "مطالعه",
    " استراحت"];
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get("/", function (req, res) {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let day = today.toLocaleDateString("fa-IR", options);
    res.render('list', { kindOfDay: day, newListItems: items });
})

app.post("/", function (req, res) {
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})



app.listen(3000, function () {
    console.log("server is running on port 3000");
})