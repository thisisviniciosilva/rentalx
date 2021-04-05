import IUserDTO from "../dtos/IUserDTO";
import User from "../infra/typeorm/entities/User";

export default interface IUsersRepository {
  create(data: IUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}
