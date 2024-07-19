"use strict";

module.exports = (sequelize, DataTypes) => {
  const Denuncias = sequelize.define(
    "Denuncias",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_mascota: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tipo_de_denuncia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      motivo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      id_colonia: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "denuncias",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Denuncias;
};
