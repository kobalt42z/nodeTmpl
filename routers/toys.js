const express = require("express");
const router = express.Router();
const {ToysModel,validateToys} = require("../models/toysModel")

router.get("/",(req,res)=>{
let perpage = number(req.query.perpage)||10;
    
   try {
    data = ToysModel
    .find({})
    .limit(perpage)
    .skip()
    
   } catch (error) {
    
   }

})


module.exports = router ;