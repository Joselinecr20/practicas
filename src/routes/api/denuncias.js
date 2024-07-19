const express = require("express");
const router = express.Router();

import db from "../../models/index.js";
const { op } = require("sequelize");

router.post("/registrarDenuncia", async (req, res) => {
  const { id_mascota, tipo_de_denuncia, motivo, id_colonia } = req.body;

  try {
    const denuncias = await db.Denuncias.create({
      id_mascota,
      tipo_de_denuncia,
      motivo,
      id_colonia,
    });

    if (denuncias) {
      res.send("Denuncia registrada");
    } else {
      res.send("error al registrar denuncia");
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/mostrarDenuncia", async (req, res) => {
  const { id } = req.body;

  const denuncias = await db.Denuncias.findOne({
    where: {
      id,
    },
  });

  if (denuncias) {
    res.send(denuncias);
  } else {
    res.send("error al mostrar denuncia");
  }
});

module.exports = router;
