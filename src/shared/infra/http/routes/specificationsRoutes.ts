import { Router } from "express";

import CreateSpecificationController from "@modules/cars/controllers/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post("/", createSpecificationController.handle);

export default specificationsRoutes;
