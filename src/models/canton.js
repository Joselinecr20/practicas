"use strict";

module.exports = (sequelize, DataTypes) => {
  const Canton = sequelize.define(
    "Canton",
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
      id_distrito: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
    },
    {
      tableName: "canton",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Canton;
};
