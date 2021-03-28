import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import AppError from "../errors/AppError";
import UsersRepository from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export default async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new AppError("Token missing.", 401);
  }

  const [, token] = authorization.split(" ");

  try {
    const { sub: userId } = verify(
      token,
      "4f9e0f76e737ee7981763dbab1d9ea2e"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = usersRepository.findById(userId);

    if (!user) {
      throw new AppError("User does not exists.");
    }

    next();
  } catch (e) {
    throw new AppError("Token invalid.", 401);
  }
}
