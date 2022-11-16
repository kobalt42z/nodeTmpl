const express = require('express');
const router = express.Router() ;


router.get("/",async(req,res)=>{
    res.json({msg:"hello from root /"})

})
module.exports = router;