import { Injectable } from '@nestjs/common';
import { CARS } from './cars.mock';

@Injectable()
export class CarService {
    private cars = CARS;
    public async getCars() {
        return this.cars;
    }

    public async postCar(car: any) {
        return this.cars.push(car);
    }
    public async getCarById(id: number) {
        return this.cars.find(car => car.id === id);
    }
    public async deleteCar(id: number) {}
    public async updateCar(id: number, car: any) {}
}
