import { Router } from "express";
import multer from "multer";

import CreateCategoryController from "@modules/cars/controllers/CreateCategoryController";
import ImportCategoryController from "@modules/cars/controllers/ImportCategoryController";
import ListCategoriesController from "@modules/cars/controllers/ListCategoriesController";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});
const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.use(ensureAuthenticated);
categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export default categoriesRoutes;
