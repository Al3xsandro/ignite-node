import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: ICarsRepository;

describe("List cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Audi A3",
      description: "Beautiful car",
      daily_rate: 140,
      license_plate: "DEF-1212",
      fine_amount: 100,
      brand: "Audi",
      category_id: "1cedbf03-7fd6-4ed4-90d5-1b5f6ac64f2e",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Audi A3",
      description: "Beautiful car",
      daily_rate: 140,
      license_plate: "DEF-12345",
      fine_amount: 100,
      brand: "Car_brand_test",
      category_id: "1cedbf03-7fd6-4ed4-90d5-1b5f6ac64f2e",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Beautiful car",
      daily_rate: 140,
      license_plate: "DEF-1235",
      fine_amount: 100,
      brand: "Car_brand_test",
      category_id: "1cedbf03-7fd6-4ed4-90d5-1b5f6ac64f2e",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car3",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Audi A3",
      description: "Beautiful car",
      daily_rate: 140,
      license_plate: "DEF-12345",
      fine_amount: 100,
      brand: "Car_brand_test",
      category_id: "12345",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
