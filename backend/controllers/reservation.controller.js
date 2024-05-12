const Reservation = require('../models/reservation.schema'); 

exports.createReservation = async (req, res, next) => {
    try {
        const { name, date, time, pax, phoneNo, email, requests } = req.body;
        
        // Check if any of the fields are empty
        const fields = { name, pax, date, phoneNo, email, requests };
        for (const key in fields) {
            if (!fields[key]) {
                return res.status(400).json({ type: 'error', message: 'Please fill up the required fields in the reservation form.' });
            }
        }

        const reservation = await Reservation.create({
            name, date, time, pax, phoneNo, email, requests
        });

        console.log(reservation);

        res.status(201).json({ type: 'success', message: `We're delighted to confirm that your reservation has been successfully submitted. You can expect to hear from us soon via either a phone call or an email, providing you with updates on your booking status. Thank you for choosing us!` });

    } catch (error) {
        console.error(error);
        res.status(500).json({ type: 'error', message: 'Internal server error.' });
    }
}

exports.getReservations = async (req, res, next) => {
    try {
        const reservation = await Reservation.find().sort({ createdAt: -1 });
        res.status(200).json(reservation);
    } catch (error) {
        console.error('Error fetching reservation:', error);
        res.status(500).json({ type: 'error', message: 'Internal server error.' });
    }
}
