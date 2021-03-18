import Category from "../models/Category";

export interface ICategoryDTO {
  name: string;
  description: string;
}

export default interface ICategoriesRepository {
  create(data: ICategoryDTO): Category;
  findByName(name: string): Category;
  list(): Category[];
}
