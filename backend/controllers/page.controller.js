const Role = require('../models/role.schema')

exports.roles = async (req, res, next) => {
    try {
        const roles = await Role.find();
        res.render('roles', { roles });
    } catch (err) {
        next(err)
    }
};

exports.plan = async (req, res, next) => {
    try {
        const roles = await Role.find();
        res.render('plan', { roles });
    } catch (err) {
        next(err)
    }
};