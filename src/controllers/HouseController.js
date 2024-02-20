import { houseService } from "../services/HouseService.js";
import BaseController from "../utils/BaseController.js";

export class HouseController extends BaseController {
    constructor() {
        super('api/houses')
        this.router 
            .get('', this.getHouses) // NOTE gets all houses from the database
            .post('', this.createHouse) // NOTE creates a new house inside the database
            .get('/:houseIndex', this.getHouseIndex) // NOTE gets a specfic house by its id
            .put('/:houseIndex', this.updateHouse) // NOTE updates the house in the database
            .delete('/:houseIndex', this.deleteHouse) // NOTE deletes a house by its specific id
    }
    
    
      /** STUB
   * Sends all values back to the client
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
    async getHouses(request, response, next) {
        try {
            const houses = await houseService.getHouses()
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }
    
       /** STUB
   * Sends all values back to the client
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
    async createHouse(request, response, next) {
        try {
            const data = request.body
            const house = await houseService.createCar(data)
            response.send(house)
        } catch (error) {
            next(error)
        }
    }
    
           /** STUB
   * Sends all values back to the client
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async getHouseIndex(request, response, next) {
    try {
        const index = request.params.houseIndex
        const house = await houseService.getHouseIndex(index)
        response.send(house)
    } catch (error) {
        next(error)
    }
  }
  
      /** STUB
   * Sends all values back to the client
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async updateHouse(request, response, next) {
    try {
        const data = request.body
        const index = request.params.houseIndex
        const house = await houseService.updateHouse(index, data)
        response.send(house)
    } catch (error) {
        next(error)
    }
  }
  
  
       /** STUB
   * Sends all values back to the client
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async deleteHouse(request, response, next) {
    try {
        const index = request.params.houseIndex
        const message = await houseService.deleteHouse(index)
        response.send(message)
    } catch (error) {
        next(error)
    }
  }
       
}