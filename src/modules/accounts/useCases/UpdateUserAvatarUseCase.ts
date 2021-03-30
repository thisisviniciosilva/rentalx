import { inject, injectable } from "tsyringe";

// // TODO Add avatar column on users
// // TODO Refactor entity User (add avatar)
// TODO Configure upload file (multer)
// TODO Create use case's upload file avatar
// TODO Create controller

import IUsersRepository from "../repositories/IUsersRepository";

interface IRequest {
  userId: string;
  avatarFile: string;
}

@injectable()
export default class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ userId, avatarFile }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(userId);

    user.avatar = avatarFile;

    await this.usersRepository.create(user);
  }
}
