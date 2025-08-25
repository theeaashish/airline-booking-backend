const { Router } = require("express");

const { InfoController } = require("../../controllers");

const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");

const airportRoutes = require("./airport-route");

const router = Router();

router.use("/airplanes", airplaneRoutes);
router.use("/cities", cityRoutes);
router.use("/airports", airportRoutes);

router.get("/info", InfoController.info);

module.exports = router;
