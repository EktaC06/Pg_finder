const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

// database 
const { dbConnect } = require('./configs/db');
dbConnect();


// import router
const userRouter = require('./routes/user.Route');

// middleware
app.use(express.json());

// routes
app.use(process.env.USER_URL, userRouter);

// server start
app.listen(process.env.PORT, ()=>{
    console.log(`server started on port ${process.env.PORT}`);
})