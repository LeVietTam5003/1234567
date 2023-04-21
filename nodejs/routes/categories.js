var express = require('express');
var router = express.Router();
const { default: mongoose } = require("mongoose");
const {Category} = require("../helpers/MongoDBHelpers")
mongoose.connect("mongodb://localhost:27017/test1233");
var router = express.Router();

const COLLECTION_NAME = "categories"


router.get('/',function(req ,res, next){
  try {
    Category.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        res.status(400).send({message: err.message});
    });
  } catch (error) {
    res.status(500).json(err);
  }
})


module.exports = router;
