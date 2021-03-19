import { Router } from "express";

import SpecificationsRepository from "../modules/cars/repositories/implementations/SpecificationsRepository";
import CreateSpecificationService from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  try {
    const { description, name } = request.body;

    const createSpecificationService = new CreateSpecificationService(
      specificationsRepository
    );

    const specification = createSpecificationService.execute({
      description,
      name,
    });

    return response.status(201).json(specification);
  } catch (e) {
    return response.status(400).json({ error: e.message });
  }
});

export default specificationsRoutes;
