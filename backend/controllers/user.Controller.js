const User = require("../models/user.Model");

// login
const userLogin = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const findUser = await User.findOne({ Email, Password });
    res.json(findUser);
  } catch (error) {
    console.log("Login API Error: ", error);
  }
};

// register
const userRegister = async (req, res) => {
  try {
    const { FirstName, LastName, Email, Password } = req.body;
    const userCollection = { FirstName, LastName, Email, Password };
    const newUser = new User(userCollection);
    const response = await newUser.save();
    response.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.log("user Register API error: ", error);
  }
};


module.exports =  { userLogin, userRegister };