import AppError from "@shared/errors/AppError";

import IUserDTO from "../dtos/IUserDTO";
import UsersRepositoryInMemory from "../repositories/in-memory/UsersRepositoryInMemory";
import IUsersRepository from "../repositories/IUsersRepository";
import AuthenticateUserUseCase from "./AuthenticateUserUseCase";
import CreateUserUseCase from "./CreateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: IUsersRepository;

describe("Authenticate User Use Case", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
  });

  it("should be able to authenticate an user", async () => {
    const user: IUserDTO = {
      driver_license: "0001234",
      email: "user@test.com",
      name: "User Test",
      password: "123456",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate an nonexistent user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "false@test.com",
        password: "123456",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate user with incorrect password", () => {
    expect(async () => {
      const user: IUserDTO = {
        driver_license: "0001234",
        email: "user@test.com",
        name: "User Test",
        password: "123456",
      };

      await createUserUseCase.execute(user);
      await authenticateUserUseCase.execute({
        email: user.email,
        password: "IncorrectPassword",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
