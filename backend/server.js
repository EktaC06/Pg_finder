const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

// database 
const { dbConnect } = require('./configs/db');
dbConnect();

// import router
const userRouter = require('./routes/user.Route');
const corsOptions = require('./middlewares/cors.Middleware');

// middleware
app.use(express.json());
app.use(cors(corsOptions))

// routes
app.use(process.env.USER_URL, userRouter);

// server start
app.listen(process.env.PORT, ()=>{
    console.log(`server started on port ${process.env.PORT}`);
})