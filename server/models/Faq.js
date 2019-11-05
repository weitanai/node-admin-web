const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  question: { type: String },
  anwser: { type: String },
})

module.exports = mongoose.model('Faq', schema)