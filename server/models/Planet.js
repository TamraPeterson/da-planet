import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({
  name: { type: 'string', required: true },
  description: { type: 'string', required: true },
  creatorId: { type: ObjectId, required: true, ref: 'Account' },
  starId: { type: ObjectId, required: true, ref: 'Star' }
},
  { timestamps: true, toJSON: { virtuals: true } }

)