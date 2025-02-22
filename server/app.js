const express=require('express')
require('dotenv').config();
const app=express();
const path = require('path');
const bodyParser=require('body-parser')
const adminRoutes=require("../server/Routes/AdminRoute")
const productRoute=require("../server/Routes/productRoutes")
const userRoute= require("../server/Routes/userRoute");
const paymentRoute=require("./Routes/payment")
const cors=require('cors')
const db=require("./db") //used to connect the database with database file
db();






app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());

app.use("/admin",adminRoutes);
app.use("/product",productRoute);
app.use("/user", userRoute);
app.use("/api/payment/",paymentRoute);

const port=process.env.PORT
app.listen(port,function(){
console.log(`server listening on port ${port}`)
})