import Specification from "../entities/Specification";

interface ISpecificationDTO {
  description: string;
  name: string;
}

interface ISpecificationsRepository {
  create(data: ISpecificationDTO): Promise<Specification>;
  findByName(name: string): Promise<Specification>;
  // list(): Specification[];
}

export { ISpecificationDTO };
export default ISpecificationsRepository;
