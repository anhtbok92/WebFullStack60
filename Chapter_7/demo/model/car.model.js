const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Step_2: Defined schema
const carSchema = new Schema({
  name: String,
  manufacturer: String,
  price: Number
});

module.exports = mongoose.model('Car', carSchema);