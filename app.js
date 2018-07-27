const express = require('express');
var app = express();

app.get('/', (req,res)=>{
    res.send('Hello World.');
});
app.get('/about',function(req,res){
    res.send('about page');
});

app.listen(3000);