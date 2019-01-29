import mongoose from 'mongoose'
/**
 * 页面表
 */
export default (app) => {
  // const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const UserSchema = new Schema({
    // 场景模板ID
    sceneId: { type: Schema.Types.Number },
    // 页面模板标题
    name: { type: Schema.Types.String }
  })
  // 定义一些静态方法
  UserSchema.statics = {
    createPage() {

    }
  }

  return mongoose.model('Page', UserSchema, 'page')
}
