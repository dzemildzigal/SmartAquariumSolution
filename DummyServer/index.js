const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//get values
app.get("/values",function(req,res){
    fs.readFile('values.txt', function(err, data) { 
        if(err) console.log(error);
        else res.send(data.toString("utf8"));
    });
});

app.post("/set-values", function(req,res){
    console.log(req.body);
    fs.writeFile('values.txt', JSON.stringify({Temperatura:req.body.Temperatura, food: req.body.food, Nivo:req.body.Nivo}), function (err) {
        if (err) throw err;
        console.log('Replaced!');
      });
});

app.listen(8080);