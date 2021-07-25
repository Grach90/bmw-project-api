const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cotegorySchema = new Schema({
    name: String,
    created_at: Date
});

module.exports = mongoose.model("Cotegory", cotegorySchema);