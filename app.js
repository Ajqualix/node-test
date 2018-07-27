const express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send('Hello World.');
});
app.get('/about',function(req,res){
    res.send('about page');
});

app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
});