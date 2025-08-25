const { Router } = require("express");

const { AirportController } = require("../../controllers");
const { AirportMiddlewares } = require("../../middlewares");
const router = Router();

// /api/v1/airports
router.post(
  "/",
  AirportMiddlewares.validateCreateRequest,
  AirportController.createAirport
);

// /api/v1/airports
router.get("/", AirportController.getAirports);

// /api/v1/airports/:id
router.get("/:id", AirportController.getAirport);

// DELETE /api/v1/airports/:id
router.delete("/:id", AirportController.destroyAirport);

// PATCH /api/v1/airports/:id
router.patch("/:id", AirportController.updateAirport);

module.exports = router;
