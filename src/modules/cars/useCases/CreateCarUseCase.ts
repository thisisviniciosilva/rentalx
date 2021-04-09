import { inject, injectable } from "tsyringe";

import AppError from "@shared/errors/AppError";

import ICreateCarDTO from "../dtos/ICreateCarDTO";
import Car from "../infra/typeorm/entities/Car";
import ICarsRepository from "../repositories/ICarsRepository";

@injectable()
export default class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name,
  }: ICreateCarDTO): Promise<Car> {
    const carSameLicensePlate = await this.carsRepository.findCarByLicensePlate(
      license_plate
    );

    if (carSameLicensePlate) {
      throw new AppError("Car with this license plate already exists");
    }

    const car = await this.carsRepository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });

    return car;
  }
}
