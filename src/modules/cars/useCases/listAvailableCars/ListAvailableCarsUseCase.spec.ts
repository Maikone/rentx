import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";


let listCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("list Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
    });

    it("should be able to list all available cars", async () => {

        const car = await carsRepositoryInMemory.create({
            name: "Fusca",
            description: "manco",
            daily_rate: 10,
            license_plate: "aasd-234",
            fine_amount: 20,
            brand: "VW",
            category_id: "category_id",
        });

        const cars = await listCarsUseCase.execute({});
        expect(cars).toEqual([car])
    });



    it("should be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Fusc3a",
            description: "manco",
            daily_rate: 10,
            license_plate: "aasd-234",
            fine_amount: 20,
            brand: "VW",
            category_id: "category_id",
        });

        const cars = await listCarsUseCase.execute({
            brand: "Car_Brand"
        });
        expect(cars).toEqual([car])
    })
})