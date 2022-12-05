const express = require('express');
const controller = require('../controller/offerController');

const router = express.Router();

router.get('/userhome', controller.index);
router.get('/userhome/update/:id', controller.update);
router.post('/userhome/update/:id', controller.updatePost);

module.exports = router;