import { Router } from "express";
import { getTravelsCountController } from "../controllers/passengers.controllers.js";
import validateParams from "../middlewares/validateParams.js";
import { paramsSchema } from "../schemas/passengers.schemas.js";

const passengersRouter = Router();

passengersRouter.get(
  "/passengers/travels",
  validateParams(paramsSchema),
  getTravelsCountController
);

export { passengersRouter };
