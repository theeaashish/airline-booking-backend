const { Router } = require("express");

const { CityController } = require("../../controllers");
const router = Router();

// /api/v1/city
router.post("/", CityController.createCity);

module.exports = router;
