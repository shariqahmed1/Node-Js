const express  = require('express');
const router  = express.Router();

router.use('/users', require('./users'));
router.use('/public', require('./public'));
router.use('/clients', require('./clients'));

module.exports = router;
