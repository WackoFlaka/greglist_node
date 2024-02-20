import { carService } from "../services/CarService.js";
import BaseController from "../utils/BaseController.js";

export class CarsController extends BaseController {
    constructor() {
        super('api/cars')
        this.router
            .get('', this.getCars)
            .post('', this.createCar)
            .get('/:carId', this.getCarById)
            .put('/:carId', this.updateCar)
            .delete('/:carId', this.deleteCar)
    }
    
    
     /**
   * Sends all values back to the client
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
    async getCars(request, response, next) {
        try {
            const cars = await carService.getCars()
            response.send(cars)
        } catch (error) {
            next(error)
        }
    }
    
      /**
   * Sends all values back to the client
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
    async createCar(request, response, next) {
        try {
            const data = request.body
            const car = await carService.createCar(data)
            response.send(car)
        } catch (error) {
            next(error)
        }
    }
    
       /**
   * Sends all values back to the client
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
    async getCarById(request, response, next) {
        try {
            const carId = request.params.carId
            const car = await carService.getCarById(carId)
            response.send(car)
        } catch (error) {
            next(error)
        }
    }
    
       /**
   * Sends all values back to the client
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
    
    async updateCar(request, response, next) {
        try {
            const carId = request.params.carId
            const data = request.body
            const car = await carService.updateCar(carId, data)
            response.send(car)
        } catch (error) {
            next(error)
        }
    }
    
         /**
   * Sends all values back to the client
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
    
    async deleteCar(request, response, next) {
        try {
            const carId = request.params.carId
            const message = await carService.deleteCar(carId)
            response.send(message)
        } catch (error) {
            next(error)
        }
    }
}