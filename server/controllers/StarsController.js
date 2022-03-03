import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getAllStars)

  }
  async getAllStars(req, res, next) {
    try {
      // @ts-ignore
      const stars = await starsService.getAllStars(req.query)
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async createStars()
}