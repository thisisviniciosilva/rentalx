import "reflect-metadata";

import express from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "./database";
import "./shared/container";

import handleErrors from "./middlewares/handleErrors";
import routes from "./routes";
import swaggerSetupFile from "./swagger.json";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSetupFile));
app.use(routes);
app.use(handleErrors);

export default app;
