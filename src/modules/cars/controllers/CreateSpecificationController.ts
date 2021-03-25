import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateSpecificationUseCase from "../useCases/CreateSpecificationUseCase";

class CreateSpecificationController {
  handle(request: Request, response: Response): Response {
    try {
      const { description, name } = request.body;

      const createSpecificationUseCase = container.resolve(
        CreateSpecificationUseCase
      );

      const specification = createSpecificationUseCase.execute({
        description,
        name,
      });

      return response.status(201).json(specification);
    } catch (e) {
      return response.status(400).json({ error: e.message });
    }
  }
}

export default CreateSpecificationController;
