const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();

//setup code
const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");//registration
const partialPath = path.join(__dirname, "../templates/partials");

//setup handle bar:
app.set("view engine", "hbs");
app.set("views", viewPath);

//setup static directory:
app.use(express.static(publicDirectoryPath));
hbs.registerPartials(partialPath);

//api to find weather
app.get('/api/weather', function (req, res) {
    if(!req.query.city){
        res.status(400).send("Please Enter City");
        return;
    }
    geocode(req.query.city, function (data) {
        forecast(data, function (result) {
            res.status(200).send(result);
        })
    })
})

//rendering pages
app.get("/help", function (req, res) {
    res.render("help", {
        title: "Help Page"
    });
});

app.get("/about", function (req, res) {
    res.render("about", {
        title: "About Page"
    });
})

app.get("/", function (req, res) {
    res.render("home", {
        title: "Home Page"
    });
});

app.listen(3000, function () {
    console.log("The Server Is Up on Port 3000");
});