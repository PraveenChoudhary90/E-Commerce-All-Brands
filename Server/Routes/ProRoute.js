const express = require("express");
const route = express.Router();
const ProController = require("../Controller/ProController")
const multer = require('multer');
const path = require('path');


route.post("/InsertCustomer", ProController.InsertData)
route.post("/GetCustomer", ProController.GetCustomer);
route.post("/GetAdmin", ProController.GetAdmin);



// Configure storage engine and filename
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialize upload middleware and add file size limit
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 } // 1MB file size limit
});





route.post("/InsertProduct",upload.array("image", 10) ,ProController.InsertProduct);







module.exports = route;