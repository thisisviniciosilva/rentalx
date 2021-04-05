import Category from "@modules/cars/infra/typeorm/entities/Category";
import ICategoriesRepository, {
  ICategoryDTO,
} from "@modules/cars/repositories/ICategoriesRepository";

export default class CategoriesRepositoryInMemory
  implements ICategoriesRepository {
  categories: Category[] = [];

  async create({ description, name }: ICategoryDTO): Promise<Category> {
    const category = new Category();

    Object.assign(category, { name, description });
    this.categories.push(category);

    return category;
  }

  async findByName(name: string): Promise<Category> {
    return this.categories.find((category) => category.name === name);
  }

  async list(): Promise<Category[]> {
    return this.categories;
  }
}
