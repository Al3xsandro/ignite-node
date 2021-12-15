import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import swaggerUI from "swagger-ui-express";

import "../typeorm";
import "@shared/container";

import { AppError } from "@errors/AppError";

import swaggerFile from "../../../swagger.json";
import { router } from "./routes";

const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(express.json());

app.use(router);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

app.listen(3333, () => {
  console.log("Server is listener");
});
