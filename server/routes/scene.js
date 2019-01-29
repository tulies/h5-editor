import { Controller, PostMapping } from '../decorator/router'

@Controller('/api/scene')
export class adminController {
  @PostMapping('element')
  async logout(ctx, next) {
    console.log(ctx.request.body)
    const { sceneId, pageId, type, title, css, animate } = ctx.request.body

    const element = new ctx.model.Element({
      sceneId,
      pageId,
      type,
      title,
      css,
      animate
    })
    const result = await element.save()

    // const user = new ctx.model.User({
    //   username: 'aaa',
    //   password: 'bbbb'
    // })
    // await user.save()

    ctx.body = {
      code: 0,
      data: result
    }
  }
}
