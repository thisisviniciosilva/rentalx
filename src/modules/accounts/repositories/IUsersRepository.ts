import IUserDTO from "../dtos/IUserDTO";
import User from "../entities/User";

export default interface IUsersRepository {
  create(data: IUserDTO): Promise<User>;
}
