import { dbContext } from "../db/DbContext";

class GalaxiesService {
  async getAll(query = {}) {
    const galaxies = await dbContext.Galaxies.find(query)
    return galaxies
  }
  async create(newGalaxy) {
    const galaxy = await dbContext.Galaxies.create(newGalaxy)
    return galaxy
  }

}

export const galaxiesService = new GalaxiesService()