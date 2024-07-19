"use strict";

module.exports = (sequelize, DataTypes) => {
  const Estados = sequelize.define(
    "Estados",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "estados",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Estados;
};
