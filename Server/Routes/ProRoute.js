const express = require("express");
const route = express.Router();
const ProController = require("../Controller/ProController")

route.post("/InsertCustomer", ProController.InsertData)
route.post("/GetCustomer", ProController.GetCustomer);
route.post("/GetAdmin", ProController.GetAdmin);







module.exports = route;