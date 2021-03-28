import { Request, Response } from "express";
import { container } from "tsyringe";

import AuthenticateUserUseCase from "../useCases/AuthenticateUserUseCase";

export default class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;
      const authenticateUserUseCase = container.resolve(
        AuthenticateUserUseCase
      );

      const auth = await authenticateUserUseCase.execute({ email, password });

      return response.json(auth);
    } catch (e) {
      return response.status(400).json({ error: e.message });
    }
  }
}
