const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/AdminController');

router.get('/', adminController.getAll);
router.get('/:id', adminController.getById);
router.post('/', adminController.create);
router.delete('/:id', adminController.delete);

module.exports = router;


