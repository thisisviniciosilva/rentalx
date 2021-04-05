import { getRepository, Repository } from "typeorm";

import IUserDTO from "@modules/accounts/dtos/IUserDTO";
import IUsersRepository from "@modules/accounts/repositories/IUsersRepository";

import User from "../entities/User";

export default class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    id,
    name,
    email,
    avatar,
    password,
    driver_license,
  }: IUserDTO): Promise<User> {
    const element = this.repository.create({
      id,
      name,
      email,
      avatar,
      password,
      driver_license,
    });

    const user = await this.repository.save(element);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }
}
