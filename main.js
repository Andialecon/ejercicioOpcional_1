const express = require ('express');
const app = express();

app.listen(3000,()=>{
    console.log('server on port', 3000)
});

app.use(express.static(__dirname + '/public'));