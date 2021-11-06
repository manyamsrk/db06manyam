var express = require('express');
const gas_controlers= require('../controllers/gas');
var router = express.Router();
/* GET costumes */
router.get('/', gas_controlers.gas_view_all_Page );
module.exports = router;