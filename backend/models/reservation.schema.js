const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        required: true,
    },
    
    time: {
        type: String,
        required: true,
    },

    pax: {
        type: Number,
        required: true,
    },

    phoneNo: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    requests: {
        type: String,
        default: undefined
    },
    
    status: {
        type: String,
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('Reservation', reservationSchema);
