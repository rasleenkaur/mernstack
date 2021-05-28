const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((err) => console.log(`no connection`));

// MiddleWare

const middleware = (req, res, next) => {
  console.log("Hello my middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello World from the server");
});

app.get("/about", middleware, (req, res) => {
  res.send("Hello World from the about");
});
app.get("/contact", (req, res) => {
  res.send("Hello World from the contact");
});
app.get("/signin", (req, res) => {
  res.send("Hello World from the login");
});
app.get("/signup", (req, res) => {
  res.send("Hello World from the registration");
});

const port = 3000;
app.listen(port, () => {
  console.log("Server is running at port number 3000");
});
