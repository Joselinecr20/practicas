const express = require("express");
const router = express.Router();

import db from "../../models/index.js";
const { op } = require("sequelize");

router.post("/registrar", async (req, res) => {
  const {
    nombre,
    fecha_ingreso,
    tipo_de_mascota,
    edad_aproximada,
    peso,
    vacunacion,
    desparacitacion,
    condicion_de_salud,
    genero,
    idestado,
  } = req.body;

  try {
    const mascotas = await db.Mascotas.create({
      nombre,
      fecha_ingreso,
      tipo_de_mascota,
      edad_aproximada,
      peso,
      vacunacion,
      desparacitacion,
      condicion_de_salud,
      genero,
      idestado,
    });

    if (mascotas) {
      res.send("mascota registrada");
    } else {
      res.send("error al registrar mascota");
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/mostrar", async (req, res) => {
  const { id } = req.body;

  const mascotas = await db.Mascotas.findOne({
    where: {
      id,
    },
  });

  if (mascotas) {
    res.send(mascotas);
  } else {
    res.send("error al mostrar mascota");
  }
});

module.exports = router;
