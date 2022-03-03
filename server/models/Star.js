import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const StarSchema = new Schema({
  name: { type: 'string', required: true },
  description: { type: 'string', required: true },
  creatorId: { type: ObjectId, required: true, ref: 'Account' },
  galaxyId: { type: ObjectId, required: true, ref: 'Galaxy' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

StarSchema.virtual('galaxy', {
  localField: 'galaxyId',
  foreignField: '_id',
  ref: 'Galaxy',
  justOne: true
})