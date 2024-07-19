const express = require("express");
const router = express.Router();

import db from "../../models/index.js";
const { op } = require("sequelize");

router.post("/registrarArchivo", async (req, res) => {
  const { tipo_de_archivo, nombre, extencion, fecha_de_creacion, mime } =
    req.body;

  try {
    const archivos = await db.Archivos.create({
      tipo_de_archivo,
      nombre,
      extencion,
      fecha_de_creacion,
      mime,
    });

    if (archivos) {
      res.send("archivos registrada");
    } else {
      res.send("error al registrar archivos");
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/mostrarArchivos", async (req, res) => {
  const { id } = req.body;

  const archivo = await db.Archivos.findOne({
    where: {
      id,
    },
  });

  if (archivos) {
    res.send(archivos);
  } else {
    res.send("error al mostrar archivo");
  }
});

module.exports = router;
