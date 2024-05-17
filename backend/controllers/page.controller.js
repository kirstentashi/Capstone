const Role = require('../models/role.schema');
const Settings = require('../models/settings.schema');
const Employee = require('../models/employee.schema');
const Reservation = require('../models/reservation.schema');
const Item = require('../models/item.schema');

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



exports.auth = (req, res) => {
    res.render('auth');
};


exports.plan = async (req, res, next) => {
    try {
        const roles = await Role.find();
        res.render('plan', { roles });
    } catch (err) {
        next(err)
    }
};


// Dashboard
exports.dashboard = (req, res) => {
    res.render('dashboard');
};

exports.settings = async (req, res) => {
    const settings = await Settings.find();
    res.render('settings', { settings });
};

exports.employees = async (req, res) => {
    const employees = await Employee.find();
    const roles = await Role.find();
    res.render('employees', { employees, roles });
};


exports.roles = async (req, res, next) => {
    try {
        const roles = await Role.find();
        res.render('roles', { roles });
    } catch (err) {
        next(err)
    }
};

exports.reservations = async (req, res) => {
    const reservations = await Reservation.find();
    res.render('reservations', { reservations })
}

exports.pos = async (req, res) => {
    const items = await Item.find();
    res.render('pos', {items});
}


exports.items = async (req, res) => {
    res.render('items');
}