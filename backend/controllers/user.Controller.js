const User = require("../models/user.Model");
const bcrypt = require("bcrypt");

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
    const { FirstName, LastName, Email, PhoneNumber, Password } = req.body;
    const hashedPassword = await bcrypt.hash(Password, 10);
    const userCollection = { FirstName:FirstName, LastName:LastName, Email:Email, PhoneNumber:PhoneNumber ,Password:hashedPassword};
    const newUser = new User(userCollection);
    const response = await newUser.save();
    if (response) {
      return res.status(200).send({
        message: "User registered successfully",
        success: true,
        data: response,
      });
    }
  } catch (error) {
    console.log("user Register API error: ", error);
  }
};

module.exports = { userLogin, userRegister };
