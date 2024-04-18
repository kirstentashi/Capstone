const Settings = require('../models/settings.schema');


// exports.getSettings = async (req, res, next) => {

//     try {

//         const roles = await Settings.find({}).sort({ createdAt: -1 });

//         res.status(201).json({ roles, type: 'success', text: 'Role fetched successfully' });

//     } catch (error) {

//         res.status(500).json({ type: 'error', text: 'Failed to fetch Role. Please try again.' });

//     }
// }


// settings.controller.js


exports.createSettings = async (req, res, next) => {
    try {
        const { openFrom, openUntil, openTime, closeTime, resto_address, resto_tel, resto_email, disable_accountCreation, disable_tableReservations } = req.body;

        // Construct the settings object using the schema
        const settingsData = {
            schedule: {
                openFrom,
                openUntil,
                openTime,
                closeTime,
                disable_accountCreation,
                disable_tableReservations,
            },
            address: resto_address,
            tel: resto_tel,
            email: resto_email
        };

        // Create a new settings object using the schema
        const newSettings = await Settings.create(settingsData);

        res.status(201).json({ message: 'Settings created successfully.', settings: newSettings });

    } catch (error) {
        console.error('Error creating settings:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
}

exports.getSettings = async (req, res, next) => {
    try {
        let settings = await Settings.findOne();
        if (!settings) {
            const { openFrom, openUntil, openTime, closeTime, resto_address, resto_tel, resto_email, disable_accountCreation, disable_tableReservations } = req.body;
            settings = await Settings.create({ openFrom, openUntil, openTime, closeTime, resto_address, resto_tel, resto_email, disable_accountCreation, disable_tableReservations });
        }
        res.status(200).json({ settings });
    } catch (error) {
        console.error('Error fetching settings:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}




// Controller for editing a role
exports.editSettings = async (req, res, next) => {
    try {
        const { openFrom, openUntil, openTime, closeTime, resto_address, resto_tel, resto_email, disable_accountCreation, disable_tableReservations } = req.body;
        const { id } = req.params;

        const settings = await Settings.findById(id);

        if (!settings) return res.status(404).json({ error: 'Settings not found' });

        // Update role details
        settings.schedule.openFrom = openFrom;
        settings.schedule.openUntil = openUntil;
        settings.schedule.openTime = openTime;
        settings.schedule.closeTime = closeTime;
        settings.address = resto_address;
        settings.tel = resto_tel;
        settings.email = resto_email;
        settings.options.disable_accountCreation = disable_accountCreation;
        settings.options.disable_tableReservations = disable_tableReservations;

        await settings.save();

        res.status(200).json({ message: 'Settings updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}
