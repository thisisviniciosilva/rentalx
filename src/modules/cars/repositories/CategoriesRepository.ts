import Category from "../models/Category";
import ICategoryRepository, { ICategoryDTO } from "./ICategoriesRepository";

class CategoriesRepository implements ICategoryRepository {
  categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICategoryDTO): Category {
    const category = new Category();

    Object.assign(category, { name, description, created_at: new Date() });
    this.categories.push(category);

    return category;
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }
}

export default CategoriesRepository;
