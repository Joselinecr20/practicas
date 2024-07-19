"use strict";

module.exports = (sequelize, DataTypes) => {
  const Distritos = sequelize.define(
    "Distritos",
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
      tableName: "distritos",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Distritos;
};
