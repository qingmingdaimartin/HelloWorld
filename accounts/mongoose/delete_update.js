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

/*     // delete one item
    try {
        let result = await BookModel.deleteOne({_id: '6685e9e593ddc0a2bf9d1f06'});
        console.log(result);
    } catch (err) {
        console.log('Delete failed', err);
    }  */

/*     // delete many item
    try {
        let result = await BookModel.deleteMany({is_hot: false});
        console.log(result);
    } catch (err) {
        console.log('Delete failed', err);
    } */

    /* // update one item
     try {
        let result = await BookModel.updateOne({name:'sanguo'},{price:9.9});
        console.log(result);
    } catch (err) {
        console.log('Update failed', err);
    }  */
    try {
        let result = await BookModel.updateMany({author:'Yifan'},{is_hot:true});
        console.log(result);
    } catch (err) {
        console.log('Update failed', err);
    } 
});

mongoose.connection.on('error', () => {
    console.log('Connection failure');
});

mongoose.connection.on('close', () => {
    console.log('Connection close');
});
