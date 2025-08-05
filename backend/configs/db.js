const dotenv = require("dotenv");
const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Database connected successfully!");
};

module.exports = { dbConnect };
