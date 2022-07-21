import { Router } from "express";
import { singUp,singIn } from "../controllers/userController.js";
import validateSchema from "../middlewares/schemaValidator.js";
import userSchema from "../schemas/userSchema.js";

const userRouter = Router();

userRouter.post("/signup",validateSchema(userSchema), singUp);
userRouter.post("/signin",validateSchema(userSchema), singIn);

export default userRouter;