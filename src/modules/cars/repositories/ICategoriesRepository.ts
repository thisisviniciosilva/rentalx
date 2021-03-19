import Category from "../models/Category";

interface ICategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create(data: ICategoryDTO): Category;
  findByName(categoryName: string): Category;
  list(): Category[];
}

export { ICategoryDTO };
export default ICategoriesRepository;
