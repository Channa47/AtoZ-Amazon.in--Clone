const express = require('express');


//Route Imports
const product=require("./routes/productRoute")
const user=require("./routes/userRoute")
const order=require("./routes/orderRoute")


const cookieParser=require("cookie-parser")
const cors= require("cors") 
const errorMiddleware=require("./middleware/error")
const app = express();

app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use(cookieParser())



app.use("/api/v1",product);
app.use("/api/v1",user)
app.use("/api/v1",order)

//Middleware for error
app.use(errorMiddleware)

module.exports=app