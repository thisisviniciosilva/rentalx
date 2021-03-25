import Specification from "../entities/Specification";

interface ISpecificationDTO {
  description: string;
  name: string;
}

interface ISpecificationsRepository {
  create(data: ISpecificationDTO): Specification;
  findByName(specificationName: string): Specification;
  // list(): Specification[];
}

export { ISpecificationDTO };
export default ISpecificationsRepository;
