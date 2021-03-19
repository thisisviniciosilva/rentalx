import { Request, Response } from "express";

import CreateSpecificationUseCase from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { description, name } = request.body;

      const specification = this.createSpecificationUseCase.execute({
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
