import CategoriesRepository from "../../repositories/implementations/CategoriesRepository";
import ImportCategoryController from "./ImportCategoryController";
import ImportCategoryUseCase from "./ImportCategoryUseCase";

// todo
const categoriesRepository = null;
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export default importCategoryController;
