const asyncHandler = require("express-async-handler");
const Kerdoiv = require("../models/kerdoivModel");
const connectMongoDb = require("../config/dbConnection");

//@desc Egy kérdőív beküldése
//@route POST /kerdoiv/bekuldes
//@access public
const kerdoivBekuldese = asyncHandler(async (req, res) => {
    const { minoseg, gyorsasag, ar } = req.body;
    if (!minoseg || !gyorsasag || !ar) {
        res.status(400).json({
            "message": "Hiányzó adat(ok)!"
        });
    } 
    
    if (minoseg < 1 || minoseg > 5 || gyorsasag < 1 || gyorsasag > 5 || ar < 1 || ar > 5) {
        res.status(400).json({
            "message": "Hibás adatok (érvényes érték: 1-5 között))!"
        });
    } 
    
    const kerdoiv = await Kerdoiv.create({minoseg, gyorsasag, ar, ip:req.ip});
    res.status(200).json(kerdoiv);
});

//@desc Összes kérdőív letöltése
//@route GET /kerdoiv/letoltes
//@access public
const kerdoivekLetoltese = asyncHandler(async (req, res) => {
    const kerdoivek = await Kerdoiv.find();
    console.log(kerdoivek);
    res.status(200).json(kerdoivek);
});

module.exports = {  kerdoivBekuldese, kerdoivekLetoltese };
