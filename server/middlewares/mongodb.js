import { resolve } from 'path'
import fs from 'fs'
import mongoose from 'mongoose'
import config from '../config/db.js'

// import User from '../model/User'
const models = resolve(__dirname, '../model')

export default (app) => {
  mongoose.connect(config.db, {
    useNewUrlParser: true
  })
  mongoose.connection.on('disconnected', () => {
    mongoose.connect(config.db, {
      useNewUrlParser: true
    })
  })
  mongoose.connection.on('error', (err) => {
    console.error(err)
  })
  mongoose.connection.on('open', () => {
    console.log('Connected to MongoDB ', config.db)
  })
  app.mongoose = mongoose
  // app.model.User = User(app)
  fs.readdirSync(models)
    .filter(file => ~file.search(/^[^\.].*js$/))
    .forEach((file) => {
      // console.log(console.log(require(resolve(models, file))))
      const requireMixed = require(resolve(models, file))
      app.model[file.split('.')[0]] = (typeof requireMixed !== 'function') ? requireMixed.default(app) : requireMixed(app)
    })
}
