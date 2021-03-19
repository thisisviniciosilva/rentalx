import { Router } from "express";

import categoriesRoutes from "./categoriesRoutes";
import specificationsRoutes from "./specificationsRoutes";

const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationsRoutes);

export default routes;
