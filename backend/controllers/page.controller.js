const Role = require('../models/role.schema')

exports.home = (req, res) => {
    res.render('home');
};

exports.privacyPolicy = (req, res) => {
    res.render('privacy-policy');
};

exports.tos = (req, res) => {
    res.render('tos');
};

exports.menu = (req, res) => {
    res.render('menu');
};

exports.dashboard = (req, res) => {
    res.render('dashboard');
};


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