import { Router } from "express";
import { countTravelsOfPassengers } from "../controllers/passengers.controllers.js";
import validateParams from "../middlewares/validateParams.js";
import { paramsSchema } from "../schemas/passengers.schemas.js";

const passengersRouter = Router();

passengersRouter.get(
  "/passengers/travels",
  validateParams(paramsSchema),
  countTravelsOfPassengers
);

export { passengersRouter };
