// const Koa = require('koa')
// const consola = require('consola')
// const { Nuxt, Builder } = require('nuxt')

import { resolve } from 'path'
import Koa from 'koa'
import consola from 'consola'
import { Nuxt, Builder } from 'nuxt'
import R from 'ramda'
// import extendApp from './extend'

// const app = new Koa()

// Import and Set Nuxt.js options
const nuxtConfig = require('../nuxt.config.js')
nuxtConfig.dev = !(process.env === 'production')

const r = path => resolve(__dirname, path)

const MIDDLEWARES = ['mongodb', 'common', 'router']

class Server {
  constructor() {
    this.app = new Koa()
    this.app.model = {}
    this.app.context.model = this.app.model
    this.useMiddleWares(this.app)(MIDDLEWARES)
  }

  useMiddleWares(app) {
    return R.map(R.compose(
      R.map(i => i(app)),
      require,
      i => `${r('./middlewares')}/${i}`
    ))
  }
  async start() {
    // Instantiate nuxt.js
    // const { app } = this
    const nuxt = new Nuxt(nuxtConfig)
    const {
      host = process.env.HOST || '127.0.0.1',
      port = process.env.PORT || 3000
    } = nuxt.options.server

    // Build in development
    if (nuxtConfig.dev) {
      const builder = new Builder(nuxt)
      await builder.build()
    }
    // 新增model挂在到app上

    // 扩展app的扩展
    // extendApp(app)

    // console.log(app.context.model)
    this.app.use((ctx) => {
      ctx.status = 200
      ctx.respond = false // Bypass Koa's built-in response handling
      ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
      nuxt.render(ctx.req, ctx.res)
    })

    this.app.listen(port, host)
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    })
  }
}
const appServer = new Server()
appServer.start()
