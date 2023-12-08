const express = require('express');
const router = express.Router();

router.get('/', getAllMovie);
router.post('/add',addMovie);
router.get('/:id', getMovieById);

module.exports= router;
