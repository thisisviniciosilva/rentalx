import Category from "../../models/Category";
import ICategoriesRepository from "../../repositories/ICategoriesRepository";

interface IRequestDTO {
  description: string;
  name: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ description, name }: IRequestDTO): Category {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists.");
    }

    const category = this.categoriesRepository.create({ name, description });

    return category;
  }
}

export default CreateCategoryUseCase;
