import { Sequelize } from "sequelize";
import { createPool } from "mysql2/promise";
import { log } from "console";
import mysql2 from "mysql2";

// Create a MySQL connection pool using mysql2/promise
const pool = createPool({
  host: "localhost",
  user: "root",
  database: "bienestar_animal",
});

// Set up Sequelize with MySQL dialect
const sequelize = new Sequelize("bienestar_animal", "root", "", {
  host: "localhost",
  dialect: "mysql",
  dialectModule: mysql2,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  timezone: "-06:00", // Use correct placement for timezone
  logging: console.log, // Simplified logging function
});

export { sequelize };
