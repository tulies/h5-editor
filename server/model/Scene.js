import mongoose from 'mongoose'
/**
 * 场景表
 */
export default (app) => {
  // const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const SceneSchema = new Schema({
    // 标题
    title: { type: Schema.Types.String, required: true },
    // 描述
    description: { type: Schema.Types.String, required: true },
    // 分享图
    imageSrc: { type: Schema.Types.String },
    // 图片素材对象
    image: { type: Schema.Types.Mixed },
    // 类型
    type: { type: Schema.Types.Number },
    // 背景音乐
    bgAudio: { type: Schema.Types.Mixed }
  })
  SceneSchema.statics = {
    // 创建场景
    createScene() {

    }
  }

  return mongoose.model('Scene', SceneSchema, 'scene')
}
