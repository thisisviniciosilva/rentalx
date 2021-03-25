import "reflect-metadata";

import express from "express";
import swaggerUi from "swagger-ui-express";

import "./database";
import "./shared/container";

import routes from "./routes";
import swaggerSetupFile from "./swagger.json";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSetupFile));
app.use(routes);

export default app;
