import Specification from "../../models/Specification";
import ISpecificationsRepository, {
  ISpecificationDTO,
} from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ description, name }: ISpecificationDTO): Specification {
    const specification = new Specification();

    Object.assign(specification, { description, name, created_at: new Date() });
    this.specifications.push(specification);

    return specification;
  }

  findByName(specificationName: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === specificationName
    );

    return specification;
  }
}

export default SpecificationRepository;
