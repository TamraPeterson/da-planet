import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { GalaxySchema } from "../models/Galaxy";
import { StarSchema } from "../models/Star";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');

  Galaxies = mongoose.model('Galaxy', GalaxySchema, 'galaxies');
  Stars = mongoose.model('Star', StarSchema, 'stars');
  // Planets = mongoose.model('Planet', PlanetSchema, 'planets');
  // Moons = mongoose.model('Moon', MoonSchema, 'moons');
  // Creatures = mongoose.model('Creature', CreatureSchema, 'creatures');

}

export const dbContext = new DbContext()
