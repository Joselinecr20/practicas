const express = require("express");
const router = express.Router();

const mascotasRouter = require("./api/mascotas");

router.use("/mascotas", mascotasRouter);

const distritosRouter = require("./api/distritos");
router.use("/distritos", distritosRouter);

const denunciasRouter = require("./api/denuncias");
router.use("/denuncias", denunciasRouter);

const coloniasRouter = require("./api/colonias");
router.use("/denuncias", coloniasRouter);

const cantonRouter = require("./api/canton");
router.use("/canton", cantonRouter);

const archivosRouter = require("./api/archivos");
router.use("/canton", archivosRouter);

const adoptadoresRouter = require("./api/adoptadores");
router.use("/canton", adoptadoresRouter);

module.exports = router;
