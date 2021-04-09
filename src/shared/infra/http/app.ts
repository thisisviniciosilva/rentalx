import "reflect-metadata";

import express from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "@shared/container";

import swaggerSetupFile from "@docs/swagger.json";
import createConnection from "@shared/infra/typeorm";

import handleErrors from "./middlewares/handleErrors";
import routes from "./routes";

createConnection();

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSetupFile));
app.use(routes);
app.use(handleErrors);

export default app;
