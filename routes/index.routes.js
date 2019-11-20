const express = require('express')
const router = express.Router()
const Park = require("../models/park.model.js");
const Coaster = require("../models/coaster.model.js");


router.get('/', (req, res) => res.render('index'))

module.exports = router