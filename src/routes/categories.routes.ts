import { Router } from "express";

import CategoriesRepository from "../modules/cars/repositories/CategoriesRepository";
import CreateCategoryService from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.list();

  return response.json(categories);
});

categoriesRoutes.post("/", (request, response) => {
  try {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(
      categoriesRepository
    );

    const category = createCategoryService.execute({ description, name });

    return response.status(201).json(category);
  } catch (e) {
    return response.status(400).json({ error: e.message });
  }
});

export default categoriesRoutes;
