import { HttpException, Injectable } from '@nestjs/common';
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
        const car =  this.cars.find(car => car.id === id);
        if (!car) {
            throw new HttpException('Car not found', 404);
        }
        return car;
    }
    public async deleteCar(id: number) {
        const index =  this.cars.findIndex(car => car.id === id);
        if (index === -1) {
            throw new HttpException('Car not found', 404);
        }
        this.cars.splice(index, 1);
        return this.cars;
    }
    public async updateCar(id: number, car: any) {}
}
