const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

mongoose.connection.once('open', async () => {
    console.log('success');

    let BookSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        author: {
            type: String,
            default: 'martin'
        },
        style: {
            type: String,
            enum: ['city', 'country', 'rural']
        },
        price: Number,
        is_hot: Boolean,
        tags: Array,
        pub_time: Date,
        test: mongoose.Schema.Types.Mixed
    });

    let BookModel = mongoose.model('books', BookSchema);

    try {
        const data = await BookModel.create({
            name: 'xiyou',
            author: 'Wendy',
            price: 29.9,
            is_hot: true,
            tags: ['happy', 'interesting', 'sad'],
            pub_time: new Date()
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
