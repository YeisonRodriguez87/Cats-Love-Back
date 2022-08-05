const { Router } = require('express');
const { getIdCat, postCat, getAllCats } = require('../controllers/cats');

const router = Router();


// GET
router.get('/', getAllCats);
router.get('/:id', getIdCat);

//POST
router.post('/', postCat);





module.exports = router;