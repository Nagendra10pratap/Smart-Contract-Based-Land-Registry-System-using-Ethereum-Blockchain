const mongoose = require('mongoose')

const ownerDetailSchema = new mongoose.Schema({
    ownerName: {
        type: String, 
    },
    privateKey: { type: String},
    ownerEmailId: {
        type: String,
        
        match: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
    },
    ownerContactNumber: { type: String },
    panNumber: { type: String },
    occupation: { type: String },
    ownerPermanentAddress: { type: String},
    state: { type: String},
    city: { type: String },
    postalCode: { type: String},
    laddress: { type: String},
    lstate: { type: String },
    lcity: { type: String },
    lpostalCode: { type: String },
    larea: { type: String},
    lamount: { type: String},

})


module.exports = mongoose.model("owners", ownerDetailSchema)

// module.export = mongoose.model('landDetails', landDetailsSchema)