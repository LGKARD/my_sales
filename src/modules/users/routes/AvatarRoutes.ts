import { Router } from "express";
import UpdateAvatarController from "../controller/UpdateAvatarController";
import multer from "multer";
import uploadConfig from "@config/upload";
import AuthMiddleware from "@shared/middlewares/AuthMiddleware";

const avatarRouter = Router();
const upload = multer(uploadConfig);
const userAvatarController = new UpdateAvatarController();


avatarRouter.patch(
  "/",
  AuthMiddleware.execute,
  upload.single("avatar"),
  userAvatarController.update
);


export default avatarRouter;
