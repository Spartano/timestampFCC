var express = require('express');
var app = express();
var moment = require("moment");

var path = require('path');

var port = process.env.PORT || 3500;


app.get('/', function(req, res){
    
    var fileName = path.join(__dirname, 'index.html');
    
    res.sendFile(fileName, function(err){
        if(err){
            console.error(err)
        }else{
            console.log('Home page')
        }
    })
    
})

app.get('/:unix', function (req, res) {
    
    var date = moment.utc( req.params.unix );
   
   if(date.isValid()) {
        res.json( { "unix": date.valueOf(), "natural": moment(req.params.unix).format("MMMM DD, YYYY") } );
   }else{
       res.json({ 'unix': null, 'natural': null})
   } 
   
   
    
});




app.listen(port, function(){
    
    console.log('Listening to port ' + port)
})