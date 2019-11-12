var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express()
var tr = require('./models/testresults');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res)=>{
    console.log('Reached Server');
})

app.get('/testerDetails', (req, res)=>{
    var query = {email: req.query.email}
    tr.find(query).then(result=>{
        console.log(result);
        res.json(result);
    })
})

app.post('/testRes', (req, res)=>{

})





app.listen(3001);
console.log('Server running on port 3001');