const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', (_req, res) => {
    burger.all(data => {
        const dataOb = {
           burgers : data
        }
        console.log(dataOb);
        res.render("index", dataOb);

});
});

module.exports = router;