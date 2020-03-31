const express = require('express');
const burger = require('../models/burger');

router = express.Router();

router.get('/', (req,res) => {
    burger.all((data) => {
        const hbsObj = {
            burgers: data
        };
        res.render('index', hbsObj);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create(req.body.burger, (data) => {
        res.json({id: data.id});
        // res.redirect("/");
    });
});

router.put('/api/burgers/:id', (req, res) => {
    burger.update(req.params.id, (data) => {
        res.redirect("/");
    });
    
})

module.exports = router;
