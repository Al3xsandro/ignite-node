import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvaliableCarsUseCase } from "./ListAvaliableCarsUseCase";

let listAvaliableCarsUseCase: ListAvaliableCarsUseCase;
let carsRepositoryInMemory: ICarsRepository;

describe("List cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvaliableCarsUseCase = new ListAvaliableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all avaliable cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Audi A3",
      description: "Beautiful car",
      daily_rate: 140,
      license_plate: "DEF-1212",
      fine_amount: 100,
      brand: "Audi",
      category_id: "1cedbf03-7fd6-4ed4-90d5-1b5f6ac64f2e",
    });

    const cars = await listAvaliableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all avaliable cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Audi A3",
      description: "Beautiful car",
      daily_rate: 140,
      license_plate: "DEF-12345",
      fine_amount: 100,
      brand: "Car_brand_test",
      category_id: "1cedbf03-7fd6-4ed4-90d5-1b5f6ac64f2e",
    });

    const cars = await listAvaliableCarsUseCase.execute({
      brand: "Car_brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all avaliable cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Beautiful car",
      daily_rate: 140,
      license_plate: "DEF-1235",
      fine_amount: 100,
      brand: "Car_brand_test",
      category_id: "1cedbf03-7fd6-4ed4-90d5-1b5f6ac64f2e",
    });

    const cars = await listAvaliableCarsUseCase.execute({
      name: "Car3",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all avaliable cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Audi A3",
      description: "Beautiful car",
      daily_rate: 140,
      license_plate: "DEF-12345",
      fine_amount: 100,
      brand: "Car_brand_test",
      category_id: "12345",
    });

    const cars = await listAvaliableCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
