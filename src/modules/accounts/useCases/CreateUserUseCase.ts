import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import IUserDTO from "../dtos/IUserDTO";
import User from "../entities/User";
import IUsersRepository from "../repositories/IUsersRepository";

@injectable()
export default class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: IUserDTO): Promise<User> {
    const passwordHash = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });

    return user;
  }
}
