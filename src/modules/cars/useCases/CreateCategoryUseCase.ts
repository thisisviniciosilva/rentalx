import { inject, injectable } from "tsyringe";

import AppError from "@shared/errors/AppError";

import Category from "../infra/typeorm/entities/Category";
import ICategoriesRepository from "../repositories/ICategoriesRepository";

interface IRequestDTO {
  description: string;
  name: string;
}

@injectable()
export default class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ description, name }: IRequestDTO): Promise<Category> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError("Category already exists.");
    }

    const category = await this.categoriesRepository.create({
      name,
      description,
    });

    return category;
  }
}
