const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    file_name: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true,
        required: true
    },
    myText: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Myimage', categorySchema);