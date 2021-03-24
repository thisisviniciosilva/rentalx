import express from "express";
import swaggerUi from "swagger-ui-express";

import routes from "./routes";

import swaggerSetupFile from "./swagger.json";

import "./database";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSetupFile));
app.use(routes);

export default app;
