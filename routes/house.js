var express = require('express');
const house_controlers= require('../controllers/house');
var router = express.Router();
/* GET costumes */
router.get('/', house_controlers.house_view_all_Page );
module.exports = router;

/* GET detail house page */
router.get('/detail', house_controlers.house_view_one_Page);


/* GET create house page */
router.get('/create', house_controlers.house_create_Page);

/* GET create update page */
router.get('/update' , house_controlers.house_update_Page);

/* GET create costume page */
router.get('/delete', house_controlers.house_delete_Page);


