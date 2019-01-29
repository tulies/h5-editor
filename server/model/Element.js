import mongoose from 'mongoose'
/**
 * 元素表
 */
export default (app) => {
  // const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const UserSchema = new Schema({
    // 场景ID
    sceneId: { type: Schema.Types.Number },
    // 页面ID
    pageId: { type: Schema.Types.Number },
    // 类型
    type: { type: Schema.Types.Number },
    // 元素标题
    title: { type: Schema.Types.String },
    // css样式 对象
    css: { type: Schema.Types.Mixed },
    // 动画效果，对象数组
    animate: { type: [ Schema.Types.Mixed ] }
  })
  return mongoose.model('Element', UserSchema, 'element')
}
