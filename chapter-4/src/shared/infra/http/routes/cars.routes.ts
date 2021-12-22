import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvaliableCarsController } from "@modules/cars/useCases/listAvaliableCars/ListAvaliableCarsController";

import { EnsureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createCarController = new CreateCarController();
const listAvaliableCarsController = new ListAvaliableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();

const carsRoutes = Router();

carsRoutes.post(
  "/",
  ensureAuthenticated,
  EnsureAdmin,
  createCarController.handle
);

carsRoutes.get("/avaliable", listAvaliableCarsController.handle);
carsRoutes.post(
  "/specifications/:id",
  ensureAuthenticated,
  EnsureAdmin,
  createCarSpecificationController.handle
);

export { carsRoutes };
