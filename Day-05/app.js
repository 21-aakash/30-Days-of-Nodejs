///starting with express js

const express = require("express");

const app = express();

//get , post , put , delete
app.get("/", (req, res) => {
  res.send("hello from express");
});
app.get("/about", (req, res) => {
  res.send("this is alll about haan !!!!!!");
});
app.get("/contact", (req, res) => {
  res.send("contact me  now !!!!!!!!");
});

app.listen(3000, () => {
  console.log("Port is runnig");
});

//use node mon : to reflect some changes on server you need to restart it again m=, but nodemon will do it automatic for you , just install mpm i nodemon , and excute file / serer by nodemon app.js
