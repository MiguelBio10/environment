const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  animesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = animes = mongoose.model('Anime', animesSchema);