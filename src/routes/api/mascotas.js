const express = require("express");
const router = express.Router();

router.post("/registrar", (req, res) => {
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

  console.log("recibido");
  res.send(
    `mascota recibida: ${nombre} \n fecha de ingreso: ${fecha_ingreso} \n tipo de mascota:${tipo_de_mascota} \n Edad aproximada:${edad_aproximada} \n Peso: ${peso} \n Vacunacion:${vacunacion} \n Desparacitacion: ${desparacitacion} \n Condicion de salud: ${condicion_de_salud} \n Genero: ${genero} \n Estado:${idestado}`
  );
});

router.post("/mostrar", (req, res) => {
  const { id } = req.body;

  let response =
    id == 1
      ? {
          nombre: "Neron",
          fecha_ingreso: "12-5-2023",
          edad_aproximada: "3",
          peso: "5.5",
          vacunacion: "completada",
          desparacitacion: "completada",
          condicion_de_salud: "estable",
          genero: "Hembra",
          idestado: "abandono",
        }
      : "mascota no existe";

  res.send(response);
});

module.exports = router;
