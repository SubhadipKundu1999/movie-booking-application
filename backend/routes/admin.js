const express = require('express');
const router = express.Router();

router.get('/', getAdmin);
router.get('/:id',getAdminById);

router.post('/signup', adminSignup);
router.post('/login', adminLogin);


module.exports= router;
