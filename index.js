const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const routes = require("./routes/api");

//setup express app
const app = express();

//connect to mongodb
mongoose.connect("mongodb://localhost//mukesh");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//initialize routes
app.use('/api',require("./routes/api"));

//error handling middleware
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
});

//listening to port
app.listen(process.env.port || 4000, function(){
    console.log("listening to port 4000");
});