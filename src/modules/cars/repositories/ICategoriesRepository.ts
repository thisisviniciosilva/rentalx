import Category from "../entities/Category";

export interface ICategoryDTO {
  name: string;
  description: string;
}

export default interface ICategoriesRepository {
  create(data: ICategoryDTO): Promise<Category>;
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
}
