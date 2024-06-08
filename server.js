"use strict";

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
