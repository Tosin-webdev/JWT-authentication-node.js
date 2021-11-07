const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.static("public"));

// env file
dotenv.config({ path: ".env" });

// view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

// database connection
const connectDB = async () => {
  try {
    // mongodb connection string
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`mongoDB connected: ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
connectDB();

app.get("/smoothies", (req, res) => {
  res.render("smoothies");
});

app.listen(3000, () => {
  console.log(`server is running on port ${PORT}`);
});
