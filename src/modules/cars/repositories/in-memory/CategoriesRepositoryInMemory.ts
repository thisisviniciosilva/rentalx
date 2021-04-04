import Category from "../../entities/Category";
import ICategoriesRepository, { ICategoryDTO } from "../ICategoriesRepository";

export default class CategoriesRepositoryInMemory
  implements ICategoriesRepository {
  categories: Category[] = [];

  async create({ description, name }: ICategoryDTO): Promise<Category> {
    const category = new Category();

    Object.assign(category, { name, description });

    return category;
  }

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }

  async list(): Promise<Category[]> {
    const list = this.categories;

    return list;
  }
}
