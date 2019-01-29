import mongoose from 'mongoose'

export default (app) => {
  // const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const UserSchema = new Schema({
    username: {
      type: String
    },
    password: {
      type: String
    }
  })
  return mongoose.model('User', UserSchema, 'user')
}
