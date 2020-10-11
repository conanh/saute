const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
console.log("Starting server...")
app.listen(PORT, () => console.log("Server started on port " + PORT));

console.log("Connecting to DB...")
mongoose.connect(process.env.MONGODB_URI, 
  { useNewUrlParser: true, useUnifiedTopology: true }, 
  err => {
    if (err) return console.log(err);
    console.log("Connection to MongoDB successful");
});