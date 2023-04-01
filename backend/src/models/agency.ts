import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Agency = new Schema({
  id: { type: Number },
  name: { type: String },
  address: { type: String },
  city: { type: String },
  telephone: { type: String },
  PIB: { type: String },
});

export default mongoose.model("Agency", Agency, "agencies");