const express = require("express");
const route = express.Router();
const ProController = require("../Controller/ProController")

route.post("/InsertCustomer", ProController.InsertData)







module.exports = route;