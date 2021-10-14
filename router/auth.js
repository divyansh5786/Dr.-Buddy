const express = require('express');
const router = express.Router();
require('../db/conn');
const mongoose = require('mongoose');
const path = require('path');

doctorLogin = require("../controller/doctorLogin");

router.get('/', (req, res) => {
    res.send('hello');
});

router.post('/login', doctorLogin.register);

module.exports = router;