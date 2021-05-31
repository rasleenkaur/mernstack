const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/conn.js");

const User = require("../model/userSchema.js");

router.get("/", (req, res) => {
  res.send(`Hello world from server`);
});

//-------------------------RESISTRATION--------------------------------
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Error" });
  }

  // using promises
  // User.findOne({ email: email })
  //   .then((userExists) => {
  //     if (userExists) {
  //       return res.status(422).json({ error: "Error Email Already Exists" });
  //     }

  //     const user = new User({ name, email, phone, work, password, cpassword });
  //     user
  //       .save()
  //       .then(() => {
  //         res.status(201).json({ message: "User Added" });
  //       })
  //       .catch((err) => {
  //         res.status(500).json({ error: "Registration Failed" });
  //       });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  try {
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(422).json({ error: "Error: Email Already Exists" });
    } else if (password != cpassword) {
      return res.status(422).json({
        error: "Error: Confirm Password does not match with Password",
      });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      //hash pasword and cpassword
      await user.save();

      res.status(201).json({ message: "User Added" });
    }
  } catch (err) {
    console.log(err);
  }
});

//-----------------------login route----------------------------

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  //res.json({ message: "Login Successful" });

  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please complete the fields" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwttoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ message: "Invalid Credentials" });
      } else {
        res.json({ message: "User Sign In Succesful" });
      }
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
    //---------------------------------------------------------------------
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
