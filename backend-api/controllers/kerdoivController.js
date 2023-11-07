const asyncHandler = require("express-async-handler");
const Kerdoiv = require("../models/kerdoivModel");
const connectMongoDb = require("../config/dbConnection");

//@desc Egy kérdőív beküldése
//@route POST /kerdoiv/bekuldes
//@access public
const kerdoivBekuldese = asyncHandler(async (req, res) => {
    clientIP = req.ip;
    const { minoseg, gyorsasag, ar } = req.body;

    if (await Kerdoiv.findOne({ip: clientIP})) {
        res.status(400).json({
            szavazott: true, 
            message: "Ez az IP cím már szavazott"
        });
    }
    else if (!minoseg || !gyorsasag || !ar) {
        res.status(400).json({
            "message": "Hiányzó adat(ok)!"
        });
    } 
    else if (minoseg < 1 || minoseg > 5 || gyorsasag < 1 || gyorsasag > 5 || ar < 1 || ar > 5) {
        res.status(400).json({
            "message": "Hibás adatok (érvényes érték: 1-5 között))!"
        });
    } 
    else {
        const kerdoiv = await Kerdoiv.create({minoseg, gyorsasag, ar, ip:req.ip});
        res.status(200).json(kerdoiv);
    }
});

//@desc Összes kérdőív letöltése
//@route GET /kerdoiv/letoltes
//@access public
const kerdoivekLetoltese = asyncHandler(async (req, res) => {
    const kerdoivek = await Kerdoiv.find();
    console.log(kerdoivek);
    res.status(200).json(kerdoivek);
});

//@desc A requestet elküldő IP szavazott már?
//@route GET /kerdoiv/szavazott
//@access public
const marSzavazott = asyncHandler(async (req, res) => {
    clientIP = req.ip;
    const szavazat = await Kerdoiv.findOne({ip: clientIP});
    szavazott = szavazat != null;
    res.status(200).json({szavazott: szavazott});
});

//@desc A szavazás állása: hány szavazat és a kategóriák átlaga
//@route GET /kerdoiv/eredmeny
//@access publoc
const eredmeny = asyncHandler(async(req, res)=> {
    
    const eredmeny = await Kerdoiv.aggregate([
        {
            $group: {
                _id: "eredmeny",
                minoseg:  {$avg: "$minoseg" },
                gyorsasag: { $avg: "$gyorsasag" },
                ar: { $avg: "$ar" },
            }
        }
    ]);
    eredmeny.push({szavazatokSzama: await Kerdoiv.count()});
    
    res.status(200).json(eredmeny);
});
module.exports = {  kerdoivBekuldese, kerdoivekLetoltese, marSzavazott, eredmeny };
