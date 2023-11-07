const express = require("express");
const router = express.Router();
const { kerdoivBekuldese, kerdoivekLetoltese, marSzavazott, eredmeny } = require("../controllers/kerdoivController");

router.post("/bekuldes", kerdoivBekuldese);
router.get("/letoltes", kerdoivekLetoltese);
router.get("/szavazott", marSzavazott);
router.get("/eredmeny", eredmeny)

module.exports = router;