const express = require('express');
const AuthRouter = express.Router();
const RegisterUser = require("../controllers/RegisterUser")
const LoginUser = require("../controllers/LoginUser")
const Collections = require("../controllers/getCollections")
let verifyToken = require('../middlewares/VerifyToken');

AuthRouter.post("/register", RegisterUser);
AuthRouter.post("/login", LoginUser);
AuthRouter.get("/getCollections", verifyToken, Collections);


module.exports = AuthRouter;