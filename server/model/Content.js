export default (app) => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const ContentSchema = new Schema({
    username: {
      type: String
    },
    password: {
      type: String
    }
  })
  return mongoose.model('Content', ContentSchema, 'content')
}
