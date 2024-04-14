const { Router } = require('express');
const router = Router();
const multer = require('multer');
const upload = multer();

const page = require('./controllers/page.controller');
const role = require('./controllers/role.controller');

// Pages
router.get('/dashboard/roles', page.roles);
router.get('/plan', page.plan);

// Roles
router.post('/dashboard/create-role', upload.single(), role.createRole);
router.get('/dashboard/roles/', role.getRoles);
router.get('/dashboard/role/:id', role.getRole);
router.put('/dashboard/edit-role', role.editRole);
router.delete('/dashboard/delete-role', role.deleteRole);

module.exports = router;