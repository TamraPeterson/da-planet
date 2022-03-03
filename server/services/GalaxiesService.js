import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxiesService {
  async getAll(query = {}) {
    const galaxies = await dbContext.Galaxies.find(query)
    return galaxies
  }
  async getById(id) {
    const galaxy = await dbContext.Galaxies.findById(id)
    if (!galaxy) {
      throw new BadRequest('Invalid Galaxy Id')
    }
    return galaxy
  }
  async create(newGalaxy) {
    const galaxy = await dbContext.Galaxies.create(newGalaxy)
    return galaxy
  }

}

export const galaxiesService = new GalaxiesService()