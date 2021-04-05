import "reflect-metadata";

import express from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "@shared/container";
import "@shared/infra/typeorm";

import swaggerSetupFile from "@docs/swagger.json";

import handleErrors from "./middlewares/handleErrors";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSetupFile));
app.use(routes);
app.use(handleErrors);

export default app;
