const express = require("express");
const router = express.Router();

import db from "../../models/index.js";
const { op } = require("sequelize");

router.post("/registrarAdoptador", async (req, res) => {
  const {
    dui,
    id_mascota,
    nombre,
    apellidos,
    edad,
    telefono,
    direccion_de_residencia,
    mascotas,
    cantidad_de_mascotas,
    especificacion_de_mascota,
  } = req.body;

  try {
    const adoptador = await db.Adoptador.create({
      dui,
      id_mascota,
      nombre,
      apellidos,
      edad,
      telefono,
      direccion_de_residencia,
      mascotas,
      cantidad_de_mascotas,
      especificacion_de_mascota,
    });

    if (adoptador) {
      res.send("Adoptador registrado");
    } else {
      res.send("error al registrar adoptador");
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/mostrarAdoptador", async (req, res) => {
  const { id } = req.body;

  const adoptador = await db.Adoptador.findOne({
    where: {
      id,
    },
  });

  if (adoptador) {
    res.send(adoptador);
  } else {
    res.send("error al mostrar adoptador");
  }
});

module.exports = router;
