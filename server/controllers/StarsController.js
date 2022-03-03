import { Auth0Provider } from "@bcwdev/auth0provider";
import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getAllStars)
      .get('/:id', this.getStarById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createStars)

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
  async getStarById(req, res, next) {
    try {
      const star = await starsService.getStarById(req.params.id)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async createStars(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const stars = await starsService.createStars(req.body)
    } catch (error) {
      next(error)
    }
  }
}