const { Router } = require("express");

const { InfoController } = require("../../controllers");

const router = Router();

router.get("/info", InfoController.info);

module.exports = router;
