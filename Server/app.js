const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

dotenv.config({ path: "./config.env" });
require("./db/conn");

app.use(express.json());
app.use(cookieParser());
// we link the router files to make our route easy
app.use(require("./router/auth"));
const PORT = process.env.PORT;

// MiddleWare

// const middleware = (req, res, next) => {
//   console.log("Hello my middleware");
//   next();
// };

// app.get("/", (req, res) => {
//   res.send("Hello World from the server app.js");
// });

// app.get("/about",  (req, res) => {
//   res.send("Hello World from the about");
// });
// app.get("/contact", (req, res) => {
//   // res.cookie("Test", "Thapa");
//   res.send("Hello World from the contact");
// });
// app.get("/signin", (req, res) => {
//   res.send("Hello World from the login");
// });
// app.get("/signup", (req, res) => {
//   res.send("Hello World from the registration");
// });

app.listen(PORT, () => {
  console.log(`Server is running at port number ${PORT}`);
});
