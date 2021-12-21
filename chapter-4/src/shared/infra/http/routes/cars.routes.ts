import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";

import { EnsureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createCarController = new CreateCarController();

const carsRoutes = Router();

carsRoutes.post(
  "/",
  ensureAuthenticated,
  EnsureAdmin,
  createCarController.handle
);

export { carsRoutes };
