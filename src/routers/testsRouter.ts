import { Router } from "express";
import { addTests,findTests } from "../controllers/testsController.js";
import tokenValidator from "../middlewares/tokenValidator.js";
import validateSchema from "../middlewares/schemaValidator.js";
import testSchema from "../schemas/testSchema.js";

const testsRouter = Router();

testsRouter.post("/tests",validateSchema(testSchema),tokenValidator, addTests);
testsRouter.get("/findtests/:discipline",tokenValidator, findTests);

export default testsRouter;