const express = require("express");
const router = express.Router();

router.post("/info", (req, res) => {
  res.send("POST a mascotas");
});

module.exports = router;
