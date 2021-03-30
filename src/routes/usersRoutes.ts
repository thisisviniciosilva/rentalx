import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import CreateUserController from "../modules/accounts/controllers/CreateUserController";
import UpdateUserAvatarController from "../modules/accounts/controllers/UpdateUserAvatarController";

const usersRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatars"));
const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export default usersRoutes;
