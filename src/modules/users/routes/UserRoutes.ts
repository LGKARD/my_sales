import { Router } from "express";
import { createUserSchema } from "../schemas/UserSchemas";
import UsersController from "../controller/UsersController";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get("/", usersController.index);
usersRouter.post("/", createUserSchema, usersController.create);

export default usersRouter;

