import { inject, injectable } from "tsyringe";

import AppError from "../../../errors/AppError";
import Specification from "../entities/Specification";
import ISpecificationRepository from "../repositories/ISpecificationsRepository";

interface IRequestDTO {
  description: string;
  name: string;
}

@injectable()
export default class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationRepository
  ) {}

  async execute({ description, name }: IRequestDTO): Promise<Specification> {
    const specificationAlreadyExists = await this.specificationsRepository.findByName(
      name
    );

    if (specificationAlreadyExists) {
      throw new AppError("Specification already exists.");
    }

    const specification = await this.specificationsRepository.create({
      description,
      name,
    });

    return specification;
  }
}
