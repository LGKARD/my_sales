import { Router } from "express";
import SessionController from "../controller/SessionController";
import { sessionSchema } from "../schemas/SessionSchema";


const sessionRoutes = Router();
const sessionController = new SessionController();

sessionRoutes.post('/', sessionSchema, sessionController.create);

export default sessionRoutes;
