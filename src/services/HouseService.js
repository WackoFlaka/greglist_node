import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class HouseService {
    // NOTE grabs all houses from the database
    async getHouses() {
        const houses = await dbContext.Houses.find()
        return houses
    }
    
    // NOTE creates a new house in the database 
    async createCar(data) {
        const house = await dbContext.Houses.create(data)
        return house
    }
    
    // NOTE gets a specific house of its index
    async getHouseIndex(index) {
        const foundHouse = await dbContext.Houses.findById(index)
        
        if(!foundHouse) {
            throw new BadRequest(`House was not found with the id of ${index}`)
        }
        
        return foundHouse
    }
    
    // NOTE updates the house data inside the database
    async updateHouse(index, data) {
        const update = await this.getHouseIndex(index)
        update.bedrooms = data.bedrooms == undefined ? update.bedrooms : data.bedrooms
        update.bathrooms = data.bathrooms == undefined ? update.bathrooms : data.bathrooms
        update.year = data.year || update.year
        update.price = data.price == undefined ? update.price : data.price
        update.imgUrl = data.imgUrl || update.imgUrl
        update.description = data.description || update.description
        
        await update.save()
        
        return update
        
        
    }
    
    // NOTE deletes the house by its index
    async deleteHouse(index) {
        const house = await this.getHouseIndex(index)
        await house.deleteOne()
        return `House is deleted`
    }
    
}

export const houseService = new HouseService()