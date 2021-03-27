import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateUserUseCase from "../useCases/CreateUserUseCase";

export default class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password, driver_license } = request.body;

      const createUserUseCase = container.resolve(CreateUserUseCase);

      const user = await createUserUseCase.execute({
        name,
        email,
        password,
        driver_license,
      });

      return response.status(201).json(user);
    } catch (e) {
      return response.status(400).json({ error: e.message });
    }
  }
}
