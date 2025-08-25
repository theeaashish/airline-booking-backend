const { Router } = require("express");

const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");
const router = Router();

// /api/v1/flights
router.post(
  "/",
  FlightMiddlewares.validateCreateRequest,
  FlightController.createFlight
);

// /api/v1/flights?trips=MUM-DEL ,  GET
router.get("/", FlightController.getAllFlights);

// // /api/v1/airports/:id
// router.get("/:id", FlightController.getAirport);

// // DELETE /api/v1/airports/:id
// router.delete("/:id", FlightController.destroyAirport);

// // PATCH /api/v1/airports/:id
// router.patch("/:id", FlightController.updateAirport);

module.exports = router;
