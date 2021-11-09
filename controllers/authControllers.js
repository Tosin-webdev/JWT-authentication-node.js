const User = require("../models/User");

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let error = { email: "", password: "" };

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

  // validation errors
  if (err.message.includes("user validation failed")) {
    console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};
// controller actions
module.exports.signup_get = (req, res) => {
  res.render("signup");
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);
  // res.send("new signup");
  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).send("error, user no created");
  }
};

module.exports.login_post = async (req, res) => {
  // res.send("user login");
  const { email, password } = req.body;
  console.log(email, password);
  res.send("user login");
};
