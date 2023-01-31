const express = require("express")
const cors = require("cors")
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require("dotenv").config()
const app = express()
const port = process.env.PORT || 5000

// Middlewares
app.use(cors())
app.use(express.json())

// Default Route
app.get("/", (req, res) => {
  res.send("SK Blog Server is running")
})

// Listening the server
app.listen(port, () => {
  console.log("Server is running on port", port);
})