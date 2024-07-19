const express = require("express");
const router = express.Router();

import db from "../../models/index.js";
const { op } = require("sequelize");

router.post("/registrarColonia", async (req, res) => {
  const { nombre, id_canton } = req.body;

  try {
    const colonias = await db.Colonias.create({
      nombre,
      id_canton,
    });

    if (colonias) {
      res.send("Colonia registrada");
    } else {
      res.send("error al registrar colonia");
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/mostrarColonia", async (req, res) => {
  const { id } = req.body;

  const colonias = await db.Colonias.findOne({
    where: {
      id,
    },
  });

  if (colonias) {
    res.send(colonias);
  } else {
    res.send("error al mostrar colonia");
  }
});

module.exports = router;
