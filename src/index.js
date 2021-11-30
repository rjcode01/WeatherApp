const express = require("express");
const app = express();
const path = require("path");
const hbs = require('hbs');
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, "../public");

const templatePath = path.join(__dirname, "../templates/views"); // to change views directory name  
const partialsPath = path.join(__dirname, "../templates/partials");
// console.log(templatePath)

// To set the view engine
app.set("view engine" , "hbs");
app.set("views", templatePath) // to set views directory change's name 
hbs.registerPartials(partialsPath)

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("/blog", (req, res) => {
  res.render("blog");
});

app.get("*", (req, res) => {
  res.render("404error",{
    errorMsg:'Oops ! Page Not Found'
  });
});

app.listen(port, () => {
  console.log(`Listing at port ${port}`);
});
