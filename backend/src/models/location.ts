import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Location = new Schema({
  city: { type: String },
  municipality: { type: String },
  microlocation: { type: String },
  street: { type: String }
});

export default mongoose.model("Location", Location, "locations");
