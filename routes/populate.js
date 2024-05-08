var express = require('express');
var router = express.Router();
var db = require('../models');
var PopulateService = require('../services/PopulationService');
var populateService = new PopulateService(db)

//Populate DB
router.post('/', async function (req, res, next) {
    await populateService.populateDatabase();
    res.end();
})

module.exports = router;