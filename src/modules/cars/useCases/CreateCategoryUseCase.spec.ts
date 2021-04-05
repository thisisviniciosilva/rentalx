import AppError from "@shared/errors/AppError";

import ICategoriesRepository from "../repositories/ICategoriesRepository";
import CategoriesRepositoryInMemory from "../repositories/in-memory/CategoriesRepositoryInMemory";
import CreateCategoryUseCase from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: ICategoriesRepository;

describe("Create Category Use Case", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to create a new category", async () => {
    const category = await createCategoryUseCase.execute({
      name: "Category Test",
      description: "Category test description",
    });

    expect(category).toHaveProperty("id");
  });

  it("should not be able to create a new category with name exists", () => {
    expect(async () => {
      const categoryModel = {
        name: "Category Test",
        description: "Category test description",
      };

      await createCategoryUseCase.execute(categoryModel);
      await createCategoryUseCase.execute(categoryModel);
    }).rejects.toBeInstanceOf(AppError);
  });
});
