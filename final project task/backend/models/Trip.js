const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let tripSchema = new Schema({
    name: {
        type: String
    },
    date: {
        type: String
    },
    destination: {
        type: String
    },
}, {
    collection: 'trips'
})

module.exports = mongoose.model('Trip', tripSchema)