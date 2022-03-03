import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class StarsService {

  async getAllStars(query = {}) {
    const stars = await dbContext.Stars.find(query)
    return stars
  }
  async getStarById(id) {
    const star = await dbContext.Stars.findById(id)
    if (!star) {
      throw new BadRequest('Invalid Star Id')
    }
    return star
  }
  async createStars(newStar) {
    const star = await dbContext.Stars.create(newStar)
    return star
  }
}

export const starsService = new StarsService()