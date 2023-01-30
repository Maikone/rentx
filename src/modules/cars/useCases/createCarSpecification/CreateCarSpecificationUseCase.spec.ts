import { AppError } from './../../../../shared/errors/AppError';
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";
import { SpecificationsRepositoryInMemory } from '../../repositories/in-memory/SpecificationsRepositoryInMemory';


let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;

describe("Create car specification", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
            carsRepositoryInMemory,
            specificationsRepositoryInMemory
        );


        it("should be able to add a new specification to a now-existent car", async () => {
            expect(async () => {
                const car_id = "1234";
                const specifications_id = ["54321"];

                await createCarSpecificationUseCase.execute({
                    car_id,
                    specifications_id
                });
            }).rejects.toBeInstanceOf(AppError);
        })
        it("should be able to add a new specification to the car", async () => {
            const car = await carsRepositoryInMemory.create({
                name: "Name Car",
                description: "Description Car",
                daily_rate: 100,
                license_plate: "asd-1234",
                fine_amount: 60,
                brand: "Brand Car",
                category_id: "category"
            });

            const specification = await specificationsRepositoryInMemory.create({
                description: "teste ",
                name: "teste",
            })

            const specifications_id = [specification.id];

            const specificationsCars = await createCarSpecificationUseCase.execute({
                car_id: car.id,
                specifications_id,
            });

            expect(specificationsCars).toHaveProperty("specifications")
            expect(specificationsCars.specifications.length).toBe(1)


        });
    });
})