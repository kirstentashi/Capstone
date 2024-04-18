const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    middleName: {
        type: String,
    },

    birthdate: {
        type: Date,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    phoneNo: {
        type: String,
        required: true,
    },

    employeeID: {
        type: String,
    },

    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },

    dateOfHire: {
        type: Date,
        required: true,
    },

    employmentStatus: {
        type: String,
        enum: [
            'Full Time',
            'Part Time',
            'Contractor',
            'Intern'
        ],
        required: true
    },

    emergencyContact: {
        fullName: {
            type: String,
            required: true,
        },
        relationship: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },
    
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },

    // terminationDate: {
    //     type: Date,
    // },
    // employmentStatus: {
    //     type: String,
    //     enum: [
    //         'Active',
    //         'Inactive',
    //         'On Leave',
    //     ],
    //     required: true
    // }, 
    lastLogin: {
        type: String,
    },


});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
