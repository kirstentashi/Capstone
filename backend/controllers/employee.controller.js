const Employee = require('../models/employee.schema');

exports.createEmployee = async (req, res, next) => {
    try {
        const { firstName, lastName, middleName, birthdate, address, email, phoneNo, employeeID, role, dateOfHire, employmentStatus, emcon_fullname, emcon_relationship, emcon_address } = req.body;

        // Update the variable name for emergency contact fields to match the schema
        const employee = await Employee.create({
            firstName,
            lastName,
            middleName,
            birthdate,
            address,
            email,
            phoneNo,
            employeeID,
            role,
            dateOfHire,
            employmentStatus,
            emergencyContact: {
                fullName: emcon_fullname, // Correct the variable name to match the schema
                relationship: emcon_relationship,
                address: emcon_address
            }
        });

        console.log(employee);

        // Return the created employee object in the response
        res.status(201).json({ message: 'Employee added successfully.', employee });

    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: 'Internal server error.' });
    }
}

exports.getEmployees = async (req, res, next) => {
    try {
        const employees = await Employee.find().populate('role').sort({ createdAt: -1 });
        res.status(200).json(employees); // Send the populated employees array in the response body
    } catch (error) {
        console.error('Error fetching employees:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
}
