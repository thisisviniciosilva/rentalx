import { Router } from "express";

import authenticateRoutes from "./authenticateRoutes";
import carsRoutes from "./carsRoutes";
import categoriesRoutes from "./categoriesRoutes";
import specificationsRoutes from "./specificationsRoutes";
import usersRoutes from "./usersRoutes";

const routes = Router();

routes.use("/cars", carsRoutes);
routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationsRoutes);
routes.use("/users", usersRoutes);

routes.use(authenticateRoutes);

export default routes;
