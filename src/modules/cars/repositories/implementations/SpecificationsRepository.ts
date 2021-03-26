import { getRepository, Repository } from "typeorm";

import Specification from "../../entities/Specification";
import ISpecificationsRepository, {
  ISpecificationDTO,
} from "../ISpecificationsRepository";

export default class SpecificationRepository
  implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({
    description,
    name,
  }: ISpecificationDTO): Promise<Specification> {
    const element = this.repository.create({ name, description });

    const specification = await this.repository.save(element);

    return specification;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name });

    return specification;
  }
}
