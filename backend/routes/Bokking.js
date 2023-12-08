const express = require('express');
const router = express.Router();

router.post('/', booking);
router.delete('/:id', deleteBooking);


module.exports= router;
