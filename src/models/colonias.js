"use strict";

module.exports = (sequelize, DataTypes) => {
  const Colonias = sequelize.define(
    "Colonias",
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
      id_canton: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
    },
    {
      tableName: "colonias",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Colonias;
};
