import Specification from "../../entities/Specification";
import ISpecificationRepository from "../../repositories/ISpecificationsRepository";

interface IRequestDTO {
  description: string;
  name: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute({ description, name }: IRequestDTO): Specification {
    const specificationAlreadyExists = this.specificationsRepository.findByName(
      name
    );

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists.");
    }

    const specification = this.specificationsRepository.create({
      description,
      name,
    });

    return specification;
  }
}

export default CreateSpecificationUseCase;
