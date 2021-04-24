var express = require('express');
const house_controlers= require('../controllers/house');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// or redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }

/* GET costumes */
router.get('/', house_controlers.house_view_all_Page );
module.exports = router;

/* GET detail house page */
router.get('/detail', house_controlers.house_view_one_Page);


/* GET create house page */
router.get('/create',secured, house_controlers.house_create_Page);

/* GET create update page */
router.get('/update',secured, house_controlers.house_update_Page);

/* GET create costume page */
router.get('/delete',secured, house_controlers.house_delete_Page);


