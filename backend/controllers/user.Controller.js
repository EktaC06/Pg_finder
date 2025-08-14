const User = require("../models/user.Model");
const bcrypt = require("bcrypt");

// login
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Validate required fields
    if (!email || !password) {
      return res.status(400).send({
        message: "Email and password are required",
        success: false,
      });
    }
    
    // Find user by email only
    const findUser = await User.findOne({ Email: email });
    
    if (!findUser) {
      return res.status(401).send({
        message: "Invalid email or password",
        success: false,
      });
    }
    
    // Compare password with hashed password
    const isPasswordValid = await bcrypt.compare(password, findUser.Password);
    
    if (!isPasswordValid) {
      return res.status(401).send({
        message: "Invalid email or password",
        success: false,
      });
    }
    
    // Remove password from response
    const userResponse = findUser.toObject();
    delete userResponse.Password;
    
    res.status(200).send({
      message: "Login successful",
      success: true,
      data: userResponse,
    });
  } catch (error) {
    console.log("Login API Error: ", error);
    return res.status(500).send({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

// register
const userRegister = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;
    
    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !password) {
      return res.status(400).send({
        message: "All fields are required",
        success: false,
      });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const userCollection = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      PhoneNumber: phone,
      Password: hashedPassword,
    };
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
    return res.status(500).send({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

// user profile
const userProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const findUserProfile = await User.findById(userId);
    
    if (!findUserProfile) {
      return res.status(404).send({
        message: "User not found",
        success: false,
      });
    }
    
    // Remove password from response
    const userResponse = findUserProfile.toObject();
    delete userResponse.Password;
    
    res.status(200).send({
      message: "User profile retrieved successfully",
      success: true,
      data: userResponse,
    });
  } catch (error) {
    console.log("profile api error : ", error.message);
    return res.status(500).send({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

module.exports = { userLogin, userRegister, userProfile };
