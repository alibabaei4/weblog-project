const { Router } = require("express");

const userController = require('../controller/userController'); 

const router = new Router();

//  @desc   Login Page
//  @route  GET /users/login
router.get("/login", userController.login);

//  @desc   Register Page
//  @route  GET /users/register
router.get("/register",userController.register);

//  @desc   Register Handle
//  @route  POST /users/register
router.post("/register",userController.creatUser);

module.exports = router;
