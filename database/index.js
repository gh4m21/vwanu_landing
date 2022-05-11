const mongoose = require('mongoose')
const { DB_URI } = require('../config')

const connect_to_DB = async () => {
  try {
    return await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })

    console.log('Database connected successfully ')
  } catch (error) {
    console.log(` Could not connect to database due to error ${error.message}`)
    process.exit(1)
  }
}

const disconnectDB = async () => {
  await mongoose.disconnect()
}

module.exports = { connectDB: connect_to_DB, disconnectDB }
