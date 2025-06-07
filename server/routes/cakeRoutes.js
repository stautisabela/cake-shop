const express = require('express');
const router = express.Router();
const cakeController = require('../controllers/cakeController');
const bodyparser = require('body-parser');

router.use(bodyparser.json());
router.post('/', cakeController.createCake);
router.get('/', cakeController.getAllCakes);
router.get('/:id', cakeController.getCakeById);
router.put('/:id', cakeController.updateCake);
router.delete('/:id', cakeController.deleteCake);

module.exports = router;