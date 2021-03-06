import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "@shared/container";
import swaggerUI from "swagger-ui-express";
import { createConnection } from "typeorm";

import { AppError } from "@errors/AppError";

import swaggerFile from "../../../swagger.json";
import { router } from "./routes";

createConnection();
const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error ${err.message}`,
    });
  }
);

export { app };
