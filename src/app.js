import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/index.js";

const helmet = require("helmet");
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

// Rutas
app.use("/", routes);

// Servir archivos estáticos
app.use(express.static("public"));

export default app;
