const { json, urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const noteRouter = require("./routes/noteRoute");
const userRouter = require("./routes/userRoute");
const app = express();
const port = 7000;
require("./db/conn");
const cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/user", userRouter);
app.use("/note", noteRouter);

//to be deleted
const path = require("path");
const staticPath = path.join(__dirname, "..", "public");

app.use(express.static(staticPath));

//till this

app.get("/", (req, res) => {
  res.json("hello in the home page");
});
app.listen(port, () => {
  console.log("listening on port " + port);
});
