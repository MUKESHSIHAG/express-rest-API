const express = require("express");
const router = express.Router();
const Mukesh = require("./models/mukesh")

//Handling requests
router.get("/mukesh", function(req,res,next){
    //res.send({type: "get"});
    Mukesh.geoNear(
        {type: "Point", coordinates: [parseFloat(req.query.lng),parseFloat(req.query.lat)]},
        {maxDistance: 1000000, spherical: true}
    ).then(function(mukesh){
        res.send(mukesh);
    });
});

router.post("/mukesh", function(req,res,next){
    Mukesh.create(req.body).then(function(mukesh){
        res.send(mukesh);
    }).catch(next);
});

router.put("/mukesh/:id", function(req,res,next){
    Mukesh.findOneAndUpdate({_id: req.params.id}, req.body).then(function(){
        Mukesh.findOne({_id: req.params.id}).then(function(mukesh){
            res.send(mukesh);
        });
    });
});

router.delete("/mukesh/:id", function(req,res,next){
    Mukesh.findByIdAndRemove({_id: req.params.id}).then(function(mukesh){
        res.send(mukesh);
    })
});

//exporting modules
module.exports = router;