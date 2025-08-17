const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");

/**
 * 
 * POST: /airplanes
 * req-body: {modelNumber: 'A320', capacity: 180}
 */

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "successfully created an airplane",
      data: airplane,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "something went wrong while creating an airplane",
      data: {},
      error: error,
    });
  }
}

module.exports = {
  createAirplane,
};
