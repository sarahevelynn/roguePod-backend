const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const photoSchema = new Schema({
  photo:{ type: String, unique: false, required: false },
  photoTitle: {type: String, unique: false, required: false },
  photoCap: {type: String, unique: false, required: false }
})


const Photo = mongoose.model("Photo", photoSchema);
module.exports = Photo;
