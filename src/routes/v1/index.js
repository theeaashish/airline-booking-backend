const { Router } = require("express");

const { InfoController } = require("../../controllers");

const airplaneRoutes = require("./airplane-routes");

const router = Router();

router.use("/airplanes", airplaneRoutes);

router.get("/info", InfoController.info);

module.exports = router;
