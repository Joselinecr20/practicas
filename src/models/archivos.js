"use strict";

module.exports = (sequelize, DataTypes) => {
  const Archivos = sequelize.define(
    "Archivos",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tipo_de_archivo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      extencion: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      fecha_de_creacion: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      mime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "archivos",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Archivos;
};
