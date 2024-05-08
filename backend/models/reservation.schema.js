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

    table: {
        type: Date,
    },
    phoneNo: {
        type: String,
    },

    email: {
        type: String,
        required: true,
    },

    requests: {
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
