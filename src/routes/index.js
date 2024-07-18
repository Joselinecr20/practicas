const express = require("express");
const router = express.Router();

const mascotasRouter = require("./api/mascotas");

router.use("/mascotas", mascotasRouter);

module.exports = router;
