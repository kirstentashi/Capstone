const { Router } = require('express');
const router = Router();
const multer = require('multer');
const upload = multer();

const page = require('./controllers/page.controller');
const role = require('./controllers/role.controller');

// Pages
router.get('/', page.home);
router.get('/dashboard/roles', page.roles);
router.get('/plan', page.plan);
router.get('/privacy-policy', page.privacyPolicy);
router.get('/terms-of-service', page.tos);
router.get('/menu', page.menu);
router.get('/dashboard', page.dashboard);
// Roles
router.post('/dashboard/create-role', upload.none(), role.createRole);
router.get('/dashboard/roles/', role.getRoles);
router.get('/dashboard/role/:id', role.getRole);
router.put('/dashboard/edit-role/:id', role.editRole);
router.delete('/dashboard/delete-role', role.deleteRole);

module.exports = router;