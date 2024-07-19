const express = require("express");
const router = express.Router();

import db from "../../models/index.js";
const { op } = require("sequelize");

router.post("/registrarEstado", async (req, res) => {
  const { nombre_estado } = req.body;

  try {
    const estados = await db.Estados.create({
      nombre_estado,
    });

    if (estados) {
      res.send("Estado registrado");
    } else {
      res.send("error al registrar estado");
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/mostrarEstado", async (req, res) => {
  const { id } = req.body;

  const estados = await db.Estados.findOne({
    where: {
      id,
    },
  });

  if (estados) {
    res.send(estados);
  } else {
    res.send("error al mostrar estado");
  }
});

module.exports = router;
