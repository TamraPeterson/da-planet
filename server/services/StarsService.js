import { dbContext } from "../db/DbContext"

class StarsService {

  async getAllStars(query = {}) {
    const stars = await dbContext.Stars.find(query)
    return stars
  }
}

export const starsService = new StarsService()