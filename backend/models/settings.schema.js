const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    schedule: {
        openFrom: {
            type: String,
            enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            required: true
        },
        openUntil: {
            type: String,
            enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            required: true
        },
        openTime: {
            type: String,
            required: true
        },
        closeTime: {
            type: String,
            required: true
        }
    },
    address: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    options: {
        disable_accountCreation: {
            type: Boolean,
            default: false
        },
        disable_tableReservations: {
            type: Boolean,
            default: false
        }
    }
});

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;