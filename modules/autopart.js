const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autopartSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: String,
    created_at: Date,
    modified_at: Date,
    sold_at: Date,
    price: String,
    cotegory: String,
    amount: String,
    image: Array
})

module.exports = mongoose.model('Autopart', autopartSchema);