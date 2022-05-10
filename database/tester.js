const mongoose = require('mongoose')

const TesterSchema = mongoose.Schema({
  firstName: { type: String, require: true },
  middleName: { type: String },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  authorized: { type: Boolean, default: true },
})

const testerScheme =
  mongoose.models.tester || mongoose.model('tester', TesterSchema)

module.exports = testerScheme
