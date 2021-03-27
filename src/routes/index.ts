import { Router } from "express";

import categoriesRoutes from "./categoriesRoutes";
import specificationsRoutes from "./specificationsRoutes";
import usersRoutes from "./usersRoutes";

const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationsRoutes);
routes.use("/users", usersRoutes);

export default routes;
