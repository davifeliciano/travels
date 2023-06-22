import { Router } from "express";
import { passengersRouter } from "./passengers.routers.js";

const router = Router();

router.use(passengersRouter);

export { router };
