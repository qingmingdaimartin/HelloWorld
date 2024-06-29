const express = require('express');

const app = express();


app.get('/other', (req, res) => {
    // res.redirect('http://atguigu.com');
    // res.download(__dirname + `/package.json`);
    /* res.json({
        name: 'pack',
        slogon: 'happy day'
     }) */
    res.sendFile(__dirname + '/form.html');
});

app.listen(3000, () =>{
    console.log('start')
})