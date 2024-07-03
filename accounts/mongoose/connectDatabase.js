const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

mongoose.connection.once('open',() =>{
    console.log('success')
});
mongoose.connection.on('error',() =>{
    console.log('failure')
});
mongoose.connection.on('close',() =>{
    console.log('close')
});