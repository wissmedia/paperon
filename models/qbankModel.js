const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String
  },
}, { timestamps: true })

const Qbank = mongoose.model('qbank', questionSchema)

module.exports = Qbank