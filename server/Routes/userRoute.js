const express= require("express");
const route=express.Router();
const UserController= require("../controllers/userController");

route.post("/usersave", UserController.userRegister);
route.post("/userlogin", UserController.userLogin);
module.exports=route;