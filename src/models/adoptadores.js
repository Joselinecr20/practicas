"use strict";

module.exports = (sequelize, DataTypes) => {
  const Adoptadores = sequelize.define(
    "Adoptadores",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      dui: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_mascota: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      direccion_de_residencia: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      mascotas: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cantidad_de_mascotas: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "adoptadores",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Adoptadores;
};
