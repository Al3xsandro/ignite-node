import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ListAvaliableCarsController } from "@modules/cars/useCases/listAvaliableCars/ListAvaliableCarsController";

import { EnsureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createCarController = new CreateCarController();
const listAvaliableCarsController = new ListAvaliableCarsController();

const carsRoutes = Router();

carsRoutes.post(
  "/",
  ensureAuthenticated,
  EnsureAdmin,
  createCarController.handle
);

carsRoutes.get("/avaliable", listAvaliableCarsController.handle);

export { carsRoutes };
