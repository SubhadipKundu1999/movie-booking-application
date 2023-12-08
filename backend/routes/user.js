const express = require('express');
const router = express.Router();

router.get('/', getAllUser);
router.get('/:id',getUserById);
router.get('/booking/:id', getBookInfoOfUser);

router.put(':id', updateUser);
router.delete('/:id', deleteUser);

router.post('/signup', signup);
router.post('/login', login);


module.exports= router;
