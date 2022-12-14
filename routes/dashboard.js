const { Router } = require('express');

const {authenticated} = require('../middlewares/auth');

const router = new Router();

// @Desc   Dashboard
// @Route  GET /dashboard
router.get('/',authenticated,(req,res) => {
    res.render("dashboard", 
    {pageTitle:"بخش مدیریت | داشبورد", 
    path:"/dashboard",
    layout:"./layouts/dashLayout",
});
});



module.exports = router;