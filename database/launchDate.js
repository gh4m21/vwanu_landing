const mongoose = require('mongoose')

const dateSchema = mongoose.Schema({
  date: { type: Date, require: true },
  createdBy: { type: String },
})

const dateScheme =
  mongoose.models.dateLaunch || mongoose.model('dateLaunch', dateSchema)

module.exports = dateScheme
