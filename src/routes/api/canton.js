const express = require("express");
const router = express.Router();

import db from "../../models/index.js";
const { op } = require("sequelize");

router.post("/registrarCanton", async (req, res) => {
  const { nombre, id_distrito } = req.body;

  try {
    const canton = await db.Canton.create({
      nombre,
      id_distrito,
    });

    if (archivos) {
      res.send("Canton registrado");
    } else {
      res.send("error al registrar canton");
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/mostrarCanton", async (req, res) => {
  const { id } = req.body;

  const canton = await db.Canton.findOne({
    where: {
      id,
    },
  });

  if (canton) {
    res.send(canton);
  } else {
    res.send("error al mostrar canton");
  }
});

module.exports = router;
