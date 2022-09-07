const { Router } = require("express");
const { authenticated } = require("../middlewares/auth");

const userController = require('../controller/userController'); 

const router = new Router();

//  @desc   Login Page
//  @route  GET /users/login
router.get("/login", userController.login);

//  @desc   Login Handle
//  @route  POST /users/login
router.post("/login", userController.handleLogin);

// @desc    Logout Handle
// @Router  GET/users/login
router.get("/logout",authenticated,userController.logout)

//  @desc   Register Page
//  @route  GET /users/register
router.get("/register",userController.register);

//  @desc   Register Handle
//  @route  POST /users/register
router.post("/register",userController.creatUser);

module.exports = router;
