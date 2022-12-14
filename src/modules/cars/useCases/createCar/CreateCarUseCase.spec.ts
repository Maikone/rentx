import { AppError } from './../../../../shared/errors/AppError';
import "reflect-metadata";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";


let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe("Create Car", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
    })

    it("should create a new car", async () => {
        const car = await createCarUseCase.execute({
            name: "Name Car",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "asd-1234",
            fine_amount: 60,
            brand: "Brand Car",
            category_id: "category"
        });

        expect(car).toHaveProperty("id")

    });

    it("should not be able to create a car with exists license plate", () => {
        expect(async () => {
            await createCarUseCase.execute({
                name: "Name Car1",
                description: "Description Car",
                daily_rate: 100,
                license_plate: "asd-1234",
                fine_amount: 60,
                brand: "Brand Car",
                category_id: "category"
            });

            await createCarUseCase.execute({
                name: "Name Car2",
                description: "Description Car",
                daily_rate: 100,
                license_plate: "asd-1234",
                fine_amount: 60,
                brand: "Brand Car",
                category_id: "category"
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to create a car with available true by default", async () => {
        const car = await createCarUseCase.execute({
            name: "Car Available",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "asd-1234",
            fine_amount: 60,
            brand: "Brand Car",
            category_id: "category"
        });

        expect(car.available).toBe(true)
    });



})