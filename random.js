


let express = require('express');
let app = express(); 
let path = require('path');

app.get('',function(req,res){
    res.sendFile(path.join(__dirname,"/random.html" ))
})
  

app.listen(3000,()=>{
    console.log('Random.....')
})


