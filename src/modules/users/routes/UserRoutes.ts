import { Router } from "express";
import { createUserSchema } from "../schemas/UserSchemas";
import UsersController from "../controller/UsersController";
import AuthMiddleware from "@shared/middlewares/AuthMiddleware";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get("/", AuthMiddleware.execute, usersController.index);
usersRouter.post("/", createUserSchema, usersController.create);

export default usersRouter;

