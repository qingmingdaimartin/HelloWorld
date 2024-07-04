const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

mongoose.connection.once('open', async () => {

    let BookSchema = new mongoose.Schema({
        name: String,
        author:  String,
        price: Number,
        is_hot: Boolean,
    });

    let BookModel = mongoose.model('novel', BookSchema);

    try {
        const data = await BookModel.create({
            name: 'movies',
            author: 'Yifan',
            price: 29.9,
            is_hot: false
        });
        console.log(data);
    } catch (err) {
        console.log(err);
    }
});

mongoose.connection.on('error', () => {
    console.log('failure');
});

mongoose.connection.on('close', () => {
    console.log('close');
});
