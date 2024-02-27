
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes  = require("./routes/productRoutes")
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());

const connect = async () => {
  try {
    await mongoose.connect(
       `mongodb+srv://mdabdulq62:nadim123@cluster0.mjympox.mongodb.net/matrix?retryWrites=true&w=majority`
    );
    console.log("connect");
  } catch (error) {
    console.log(error);
  }
};


app.get("/", async (req,res) => {
    res.send('i am home page')
})
app.use("/api", productRoutes)
// app.get
app.listen(3010, () => {
  connect();
  console.log("server is running");
});

