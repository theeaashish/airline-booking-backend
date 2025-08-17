const { Router } = require('express');

const { AirplaneController } = require('../../controllers');
const router = Router();

// /api/v1/airplanes
router.post('/', AirplaneController.createAirplane);

module.exports = router;