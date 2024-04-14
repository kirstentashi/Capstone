const Role = require('../models/role.schema');

exports.createRole = async (req, res, next) => {
    try {
        const { roleName, roleColor, rolePermissions } = req.body;
        const permissions = rolePermissions.split(',').map(permission => permission.trim()); // Split properly

        const role = await Role.findOne({ name: roleName.toLowerCase() });

        if (role) return res.status(409).json({message: 'This role already exists.' });

        if (roleName.length > 25) return res.status(400).json({message: 'Role Name should be no longer than 25 characters.' });

        if (roleName.length < 2) return res.status(400).json({message: 'Role Name should be more than 2 characters.' });

        const createRole = await Role.create({ name: roleName.trim().toLowerCase(), color: roleColor, permissions}); // Save role name in lowercase

        res.status(201).json({ message: 'Role added successfully.', role: createRole });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error.' });
    }
}


exports.getRoles = async (req, res, next) => {

    try {

        const roles = await Role.find({}).sort({ createdAt: -1 });

        res.status(201).json({ roles, type: 'success', text: 'Role fetched successfully' });

    } catch (error) {

        res.status(500).json({ type: 'error', text: 'Failed to fetch Role. Please try again.' });

    }
}

exports.getRole = async (req, res, next) => {
    const { id } = req.params

    try {

        const role = await Role.findById(id);

        if (!role) return res.status(404).json({ error: 'Role not found.' });


    } catch (error) {

        res.status(500).json({ error: 'Internal server error.' });

    }

}

// Controller for editing a role
exports.editRole = async (req, res, next) => {
    try {
        const { roleName, roleColor, rolePermissions } = req.body;
        const { id } = req.params;

        const role = await Role.findById(id);

        if (!role) return res.status(404).json({ error: 'Role not found' });

        // Update role details
        role.name = roleName.trim().toLowerCase(); // Save role name in lowercase
        role.color = roleColor;
        role.permissions = rolePermissions.split(',').map(permission => permission.trim()); // Split properly

        await role.save();

        res.status(200).json({ message: 'Role updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}



exports.deleteRole = async (req, res, next) => {
    try {

        const { id } = req.params;

        const role = await Role.findByIdAndDelete(id);

        if (!role) return res.status(404).json({message: 'Role not found.' });

        res.status(200).json({ success: true, message: 'Role deleted successfully.' });

    } catch (error) {
        res.status(500).json({message: 'Internal server error.' });

    }
};

