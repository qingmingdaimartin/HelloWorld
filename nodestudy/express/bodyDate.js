const express = require('express');

const app = express();

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended: false})

app.get('/login', (req, res) => {
   // res.send('form web');
   res.sendFile(__dirname + '/11_form.html');
});

app.post('/login', urlencodedParser, (req, res) => {
    console.log(req.body)
    res.send('user data');
});


app.listen(3000, () =>{
    console.log('start')
})