import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class CarService {
 
    async getCars() {
        const cars = await dbContext.Cars.find()
        return cars
    }
    
    async createCar(data) {
        const car = await dbContext.Cars.create(data)
        return car
    }
    
    
    
    
    async getCarById(carId) {
        const car = await dbContext.Cars.findById(carId)
        
        if(!car) {
            throw new BadRequest(`Car was not found with the id of ${carId}`) 
        }
        
        return car
    }
    
    
    
    
    async updateCar(CarId, data) {
        // const car = await dbContext.Cars.findByIdAndUpdate(CarId, data)
        
        // const carToUpdate = await dbContext.Cars.findById(CarId)
        
        const carToUpdate = await this.getCarById(CarId)
        
        carToUpdate.imgUrl = data.imgUrl || carToUpdate.imgUrl
        
        carToUpdate.price = data.price == undefined ? carToUpdate.price : data.price
        
        // REVIEW                                                   if (undefined)               true           else        false 
        carToUpdate.hasSalvagedTitle = data.hasSalvagedTitle == undefined ? carToUpdate.hasSalvagedTitle : data.hasSalvagedTitle
        
        await carToUpdate.save()
        
        return carToUpdate
    }
    
    
    async deleteCar(carId) {
        // await dbContext.Cars.findByIdAndDelete(carId)
        const carToDelete = await this.getCarById(carId)
        
        await carToDelete.deleteOne()
        
        return `${carToDelete.make} ${carToDelete.model} has been deleted from the api!`
    }
    
}

export const carService = new CarService()