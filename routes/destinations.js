const router = require('express').Router();
const destinationsCtrl = require('../controllers/destinations');

router.post('/:id/destinations', destinationsCtrl.create);

module.exports = router;
