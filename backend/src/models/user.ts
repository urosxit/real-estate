import mongoose from "mongoose";

const Schema = mongoose.Schema;

let User = new Schema({
  id: { type: Number },
  firstname: { type: String },
  lastname: { type: String },
  username: { type: String },
  password: { type: String },
  city: { type: String },
  birthday: { type: String },
  telephone: { type: String },
  email: { type: String },
  //sta ti je ovo type? buyer seller
  type: { type: String },
  //zaposlen u agenciji ili ne
  agent_or_not: { type: Boolean },
  //agencija
  agency: {type: String},
  licence_number: { type: Number },
  approved: {type: Boolean}
});

export default mongoose.model("User", User, "users");
