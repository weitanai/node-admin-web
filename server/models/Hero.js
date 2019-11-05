const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  first: { type: String },
  second: { type: String },
})

module.exports = mongoose.model('Hoer', schema)