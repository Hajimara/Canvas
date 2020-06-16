const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const app = express(feathers());

// const mongoose = require('mongoose');
// mongoose
//   .connect('mongodb://localhost:27018/canvas', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch(e => {
//     console.log(e);
//   });

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.configure(express.rest());
app.use(express.errorHandler());

app.listen(3030, () => {
  console.log("running on http://localhost:3030");
});
