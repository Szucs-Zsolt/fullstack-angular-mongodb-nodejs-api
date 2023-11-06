const express = require("express");
const router = express.Router();
const { kerdoivBekuldese, kerdoivekLetoltese, marSzavazott } = require("../controllers/kerdoivController");

router.post("/bekuldes", kerdoivBekuldese);
router.get("/letoltes", kerdoivekLetoltese);
router.get("/szavazott", marSzavazott);

module.exports = router;