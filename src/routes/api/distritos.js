const express = require("express");
const router = express.Router();

import db from "../../models/index.js";
const { op } = require("sequelize");

router.post("/registrarDistrito", async (req, res) => {
  const { nombre } = req.body;

  try {
    const distritos = await db.Distritos.create({
      nombre,
    });

    if (distritos) {
      res.send("distrito registrada");
    } else {
      res.send("error al registrar distritos");
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/mostrarDistrito", async (req, res) => {
  const { id } = req.body;

  const distritos = await db.Distritos.findOne({
    where: {
      id,
    },
  });

  if (distritos) {
    res.send(distritos);
  } else {
    res.send("error al mostrar distrito");
  }
});

module.exports = router;
