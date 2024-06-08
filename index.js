"use strict";
const bodyParser = require("body-parser");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(helmet());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hello World",
    message: "Welcome!",
  });
});
app.get("/users", (req, res) => {
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
  res.render("index", { title: "EJS", users: users, message: "Hello" });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
