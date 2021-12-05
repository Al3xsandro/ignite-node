import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, description } = request.body;

      const category = this.createCategoryUseCase.execute({
        name,
        description,
      });

      return response.status(201).json(category);
    } catch (e) {
      return response.status(400).send({
        error: e.message,
      });
    }
  }
}

export { CreateCategoryController };
