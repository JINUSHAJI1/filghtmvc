const express = require('express');
const controller = require('../controller/scheduleController');

const router = express.Router();

router.get('/schedule', controller.index);
router.get('/schedule/add', controller.create);
router.post('/schedule/add', controller.createPost);
router.get('/schedule/update/:id', controller.update);
router.post('/schedule/update/:id', controller.updatePost);
router.get('/schedule/delete/:id', controller.delete);

module.exports = router;