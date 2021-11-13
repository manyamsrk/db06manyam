var express = require('express');
const gas_controlers= require('../controllers/gas');
var router = express.Router();
/* GET detail gas page */
router.get('/detail', gas_controlers.gas_view_one_Page);
/* GET create gas page */
router.get('/create', gas_controlers.gas_create_Page);
/* GET gas */
router.get('/', gas_controlers.gas_view_all_Page );
module.exports = router;
