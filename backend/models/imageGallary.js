const mongoose = require('mongoose');

const ImageGallarySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    download_url: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ImageGallary', ImageGallarySchema);