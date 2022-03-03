import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetsService {
  async getAllPlanets(query = {}) {
    const planets = await dbContext.Planets.find(query)
    return planets
  }
  async getPlanetById(id) {
    const planet = dbContext.Planets.findById(id)
    if (!planet) {
      return new BadRequest('Invalid Planet Id')
    }
    return planet
  }
  async createPlanet(newPlanet) {
    const planet = await dbContext.Planets.create(newPlanet)
    return planet
  }

}

export const planetsService = new PlanetsService()