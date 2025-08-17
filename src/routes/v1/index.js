const { Router } = require("express");

const router = Router();

router.get("/info", (req, res) => {
  return res.json({
    msg: "ok",
  });
});

module.exports = router;
