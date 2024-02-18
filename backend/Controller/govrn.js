const express = require('express');
const router = express.Router();
const  Gov = require('../Model/Government_Registrar');
// const Land = require('../models/Land');


// API for adding owner details
router.get('/gov', async (req, res) => {
    let result = await Gov.find({})
    res.status(200).json(result)
})

module.exports = router;