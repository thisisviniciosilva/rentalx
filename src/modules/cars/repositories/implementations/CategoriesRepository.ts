import { getRepository, Repository } from "typeorm";

import Category from "../../entities/Category";
import ICategoriesRepository, { ICategoryDTO } from "../ICategoriesRepository";

export default class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICategoryDTO): Promise<Category> {
    const element = this.repository.create({ description, name });

    const category = await this.repository.save(element);

    return category;
  }

  async list(): Promise<Category[]> {
    const list = this.repository.find();

    return list;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });

    return category;
  }
}
