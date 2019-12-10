import mongoose from "mongoose";
const Schema = mongoose.Schema;
const House = new Schema(
  {
    rooms: { type: Number, required: true },
    hasYard: { type: Boolean, required: true },
    bath: { type: Number, required: true, min: 1 },
    garage: { type: Number, required: true },
    sqft: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
export default House;
