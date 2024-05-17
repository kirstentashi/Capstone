const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    category: String,
    name: {
        type: String,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    vat: {
        type: Number,
    },
    // status: {
    //     type: String,
    //     enum: ['active', 'inactive'],
    //     default: 'active',
    // },
    available: {
        type: Boolean,
        default: false
    },
    featured: {
        type: Boolean,
        default: false,
    },
    bestseller: {
        type: Boolean,
        default: false,
    },
    desc: {
        type: String,
    },
    goodFor: {
        type: Number
    },
    image: {
        url: String,
        filename: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);