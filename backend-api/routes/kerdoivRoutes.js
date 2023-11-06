const express = require("express");
const router = express.Router();
const { kerdoivBekuldese, kerdoivekLetoltese } = require("../controllers/kerdoivController");

router.post("/bekuldes", kerdoivBekuldese);
router.get("/letoltes", kerdoivekLetoltese);

module.exports = router;