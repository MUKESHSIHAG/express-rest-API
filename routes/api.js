const express = require("express");
const router = express.Router();
const Mukesh = require("./models/mukesh")

//Handling requests
router.get("/mukesh", function(req,res,next){
    res.send({type: "get"});
});

router.post("/mukesh", function(req,res,next){
    Mukesh.create(req.body).then(function(mukesh){
        res.send(mukesh);
    }).catch(next);
});

router.put("/mukesh/:id", function(req,res,next){
    res.send({type: "PUT"});
});

router.delete("/mukesh", function(req,res,next){
    res.send({type: "DELETE"});
});

//exporting modules
module.exports = router;