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
    username,
    email,
    password,
    driver_license,
  }: IUserDTO): Promise<User> {
    const user = await this.usersRepository.create({
      name,
      username,
      email,
      password,
      driver_license,
    });

    return user;
  }
}
