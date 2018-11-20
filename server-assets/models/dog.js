let mongoose = require('mongoose')
let Schema = mongoose.Schema


//DEFINE THE SCHEMA -- dog, specifically
let schema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 },
  img: { type: String, required: true, },
  breed: { type: String, default: "Mutt" },
  age: { type: Number },
  color: [{ type: String }],
  gender: { type: String, required: true }
})

module.exports = mongoose.model('Dog', schema)