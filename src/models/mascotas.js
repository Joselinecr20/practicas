"use strict";

module.exports = (sequelize, DataTypes) => {
  const Mascotas = sequelize.define(
    "Mascotas",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha_ingreso: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tipo_de_mascota: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      edad_aproximada: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      peso: {
        type: DataTypes.DECIMAL(10, 0),
        allowNull: false,
      },
      vacunacion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      desparacitacion: {
        type: DataTypes.BOOLEAN,
      },
      condicion_de_salud: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      genero: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      idestado: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "mascotas",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Mascotas;
};
