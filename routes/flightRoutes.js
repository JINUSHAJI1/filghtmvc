const express = require('express');
const controller = require('../controller/flightController');

const router = express.Router();

router.get('/flight', controller.index);
router.get('/flight/add', controller.create);
router.post('/flight/add', controller.createPost);
router.get('/flight/update/:id', controller.update);
router.post('/flight/update/:id', controller.updatePost);
router.get('/flight/delete/:id', controller.delete);

module.exports = router;