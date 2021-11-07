const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

// database connection
const connectDB = async () => {
  try {
    // mongodb connection string
    const con = await mongoose.connect(
      "mongodb+srv://user2:simple03@node-tutorial.rsb65.mongodb.net/newUser?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
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
  console.log(`server is running on port ${3000}`);
});
