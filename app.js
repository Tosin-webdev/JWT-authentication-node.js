const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.static("public"));

app.listen(3000, () => {
  console.log(`server is running on port ${3000}`);
});

// view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/smoothies", (req, res) => {
  res.render("smoothies");
});
