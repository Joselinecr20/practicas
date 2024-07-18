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
    },
    {
      tableName: "mascotas",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  Mascotas.associate = (models) => {};

  return Mascotas;
};
