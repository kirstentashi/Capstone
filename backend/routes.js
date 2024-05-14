const { Router } = require('express');
const router = Router();
const multer = require('multer');
const upload = multer();

const page = require('./controllers/page.controller');
const role = require('./controllers/role.controller');
const settings = require('./controllers/settings.controller');
const employee = require('./controllers/employee.controller');
const reservation = require('./controllers/reservation.controller');

// Pages
router.get('/', page.home);
router.get('/dashboard/roles', page.roles);
router.get('/plan', page.plan);
router.get('/privacy-policy', page.privacyPolicy);
router.get('/terms-of-service', page.tos);
router.get('/menu', page.menu);
router.get('/dashboard', page.dashboard);
router.get('/auth', page.auth);
router.get('/dashboard/settings', page.settings);
router.get('/dashboard/restaurant/users/employees', page.employees);
router.get('/dashboard/restaurant/reservations', page.reservations);
router.get('/dashboard/restaurant/roles', page.roles)

// Roles
router.post('/dashboard/create-role', upload.none(), role.createRole);
router.get('/dashboard/roles/', role.getRoles);
router.get('/dashboard/role/:id', role.getRole);
router.put('/dashboard/edit-role/:id', role.editRole);
router.delete('/dashboard/delete-role', role.deleteRole);

// Settings
router.post('/dashboard/settings/createSettings', upload.none(), settings.createSettings);
router.put('/dashboard/settings/editSettings/:id', settings.editSettings);
router.get('/dashboard/settings', settings.getSettings);

// Employee
router.post('/dashboard/users/employees/createEmployee', upload.none(), employee.createEmployee);
router.get('/dashboard/users/employees', employee.getEmployees);


// Reservation
router.post('/dashboard/restaurant/reservations/createReservation', upload.none(), reservation.createReservation);
router.get('/dashboard/restaurant/reservations/', reservation.getReservations);

module.exports = router;