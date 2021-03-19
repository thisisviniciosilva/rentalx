import Category from "../models/Category";
import ICategoriesRepository, { ICategoryDTO } from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
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

  findByName(categoryName: string): Category {
    const category = this.categories.find(
      (category) => category.name === categoryName
    );

    return category;
  }
}

export default CategoriesRepository;
