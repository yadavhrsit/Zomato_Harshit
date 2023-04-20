const express = require('express');
const AuthRouter = express.Router();
const verifyToken = require('../middlewares/VerifyToken');

const RegisterUser = require("../controllers/RegisterUser");
const LoginUser = require("../controllers/LoginUser");


// GET APIs Variables
const GetSubHeaderItem = require("../controllers/getSubHeaderItems");

const GetDeliveryRest = require("../controllers/getDeliveryRestaurants");
const GetDiningRest = require("../controllers/getDiningRestaurants");
const GetNightlifeRest = require("../controllers/getNightlifeRestaurants");

const GetTopBrand = require("../controllers/getTopBrands");
const GetInspiration = require("../controllers/getInspirations");

const GetDiningCollection = require("../controllers/getDiningCollections");
const GetNightlifeCollection = require("../controllers/getNightlifeCollections");


//POST APIs Variables
const AddSubHeaderItem = require("../controllers/postSubHeaderItem");

const AddDeliveryRest = require("../controllers/postDeliveryRestaurants");
const AddDiningRest = require("../controllers/postDiningRestaurants");
const AddNightlifeRest = require("../controllers/postNightlifeRestaurants");

const AddTopBrand = require("../controllers/postTopBrands");
const AddInspiration = require("../controllers/postInspiration");

const AddDiningCollection = require("../controllers/postDiningCollections");
const AddNightlifeCollection = require("../controllers/postNightlifeCollections");


AuthRouter.post("/register", RegisterUser);
AuthRouter.post("/login", LoginUser);
AuthRouter.get("/logout", (req, res) => {
    res.clearCookie("username");
});

AuthRouter.get("/getsubheaderitem", GetSubHeaderItem);

AuthRouter.get("/getdeliveryrestaurant", GetDeliveryRest);
AuthRouter.get("/getdiningrestaurant", GetDiningRest);
AuthRouter.get("/getnightliferestaurant", GetNightlifeRest);

AuthRouter.get("/gettopbrand", GetTopBrand);
AuthRouter.get("/getinspiration", GetInspiration);

AuthRouter.get("/getdiningcollection", GetDiningCollection);
AuthRouter.get("/getnightlifecollection", GetNightlifeCollection);


// POST APIs
AuthRouter.post("/addsubheaderitem", AddSubHeaderItem);

AuthRouter.post("/adddeliveryrestaurant", AddDeliveryRest);
AuthRouter.post("/adddiningrestaurant", AddDiningRest);
AuthRouter.post("/addnightliferestaurant", AddNightlifeRest);

AuthRouter.post("/addtopbrand", AddTopBrand);
AuthRouter.post("/addinspiration", AddInspiration);

AuthRouter.post("/adddiningcollection", AddDiningCollection);
AuthRouter.post("/addnightlifecollection", AddNightlifeCollection);


module.exports = AuthRouter;