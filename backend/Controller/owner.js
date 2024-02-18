const express = require('express');
const router = express.Router();
const  Owner = require('../Model/Owners');
// const Land = require('../models/Land');


// API for adding owner details
router.post('/owner', async (req, res) => {
    //   const { ownerName, privateKey, ownerEmailId, ownerContactNumber, panNumber, occupation, ownerPermanentAddress, state, city, postalCode} = req.body;

    try {
        // let owner = await Owner.findOne({ privateKey });

        // if (owner) {
        //     return res.status(400).json({
        //         message: 'Owner Already Exists',
        //     });
        // }

        // console.log(req.body)

        let result = new Owner({
            ownerName: req.body.name,
            // privateKey: req.body.privateKey,
            ownerEmailId: req.body.email,
            ownerContactNumber: req.body.contact,
            panNumber: req.body.pan,
            occupation: req.body.occupation,
            ownerPermanentAddress: req.body.address,
            state: req.body.state,
            city: req.body.city,
            postalCode: req.body.postalCode,
            laddress: req.body.laddress,
            lcity: req.body.lcity,
            lstate: req.body.lstate,
            lpostalCode: req.body.lpostalCode,
            larea: req.body.larea,
            lamount: req.body.lamount,
            // document:req.body.document,
            // images:req.body.images

        });

        result = await result.save();
        res.status(200).send({msg:'Owner Details Added Successfully', result});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/owner', async (req, res) => {
    const result = await Owner.find({})
    res.status(200).json(result);
})

// // API for adding land details
router.post('/land', async (req, res) => {
    const { address, state, city, postalCode, area, totalAmount } = req.body;

    try {
        let owner = await Owner.findOne({ address });

        if (!owner) {
            return res.status(400).json({
                message: 'Owner Not Found',
            });
        }

        const land = new Land({
            address,
            state,
            city,
            postalCode,
            area,
            totalAmount,
        });

        await land.save();
        res.status(200).send('Land Details Added Successfully');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// API for getting all land details
router.get('/lands', async (req, res) => {
    try {
        const lands = await Land.find().populate('owner', 'privateKey');
        res.status(200).json(lands);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
