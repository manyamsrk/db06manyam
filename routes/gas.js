var express = require('express');
const gas_controlers= require('../controllers/gas');
var router = express.Router();
const secured = (req, res, next) => {
  if (req.user){
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}
/* GET gas */
router.get('/', gas_controlers.gas_view_all_Page );
/* GET detail gas page */
router.get('/detail', gas_controlers.gas_view_one_Page);
/* GET create gas page */
router.get('/create', gas_controlers.gas_create_Page);
/* GET create update page */
// router.get('/update', gas_controlers.gas_update_Page);
/* GET update gas page */
router.get('/update', secured, gas_controlers.gas_update_Page);
/* GET create gas page */
router.get('/delete', gas_controlers.gas_delete_Page);


module.exports = router;
