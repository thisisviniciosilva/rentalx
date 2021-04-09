import AppError from "@shared/errors/AppError";

import Car from "../infra/typeorm/entities/Car";
import ICarsRepository from "../repositories/ICarsRepository";
import CarsRepositoryInMemory from "../repositories/in-memory/CarsRepositoryInMemory";
import CreateCarUseCase from "./CreateCarUseCase";

let carsRepository: ICarsRepository;
let createCarUseCase: CreateCarUseCase;

describe("Create Car Use Case", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      brand: "Brand",
      category_id: "category",
      daily_rate: 1000,
      description: "Description car test",
      fine_amount: 60,
      license_plate: "ABC1D23",
      name: "Car Test",
    });

    expect(car).toBeInstanceOf(Car);
    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with license plate already exists", () => {
    expect(async () => {
      await createCarUseCase.execute({
        brand: "Brand",
        category_id: "category",
        daily_rate: 1000,
        description: "Description car test #1",
        fine_amount: 60,
        license_plate: "ABC1D23",
        name: "Car Test #1",
      });

      await createCarUseCase.execute({
        brand: "Brand",
        category_id: "category",
        daily_rate: 1000,
        description: "Description car test #2",
        fine_amount: 60,
        license_plate: "ABC1D23",
        name: "Car Test #2",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      brand: "Brand",
      category_id: "category",
      daily_rate: 1000,
      description: "Description car test",
      fine_amount: 60,
      license_plate: "ABC1D23",
      name: "Car Test",
    });

    expect(car.available).toBe(true);
  });
});
