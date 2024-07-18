const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

import { DataTypes } from "sequelize";
import { sequelize } from "./base/database.js";

const dbModels = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    dbModels[model.name] = model;
  });

Object.keys(dbModels).forEach((modelName) => {
  if (dbModels[modelName].associate) {
    dbModels[modelName].associate(dbModels);
  }
});

const dbExport = {
  Mascotas: dbModels.Mascotas,
};

export default dbExport;
