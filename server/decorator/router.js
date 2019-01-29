import { resolve } from 'path'
import R from 'ramda'
import KoaRouter from 'koa-router'
import glob from 'glob'

const pathPrefix = Symbol('pathPrefix')
const routeMap = []
let logTimes = 0

const resolvePath = R.unless(
  R.startsWith('/'),
  R.curryN(2, R.concat)('/')
)

const changeToArr = R.unless(
  R.is(Array),
  R.of
)

export default class Route {
  constructor(app, routesPath) {
    this.app = app
    this.router = new KoaRouter()
    this.routesPath = routesPath
  }

  init() {
    const { app, router, routesPath } = this
    glob.sync(resolve(routesPath, './*.js')).forEach(require)

    R.forEach(
      ({ target, method, path, callback }) => {
        // console.log({ target, method, path, callback })
        const prefix = resolvePath(target[pathPrefix])
        router[method](prefix + path, ...callback)
      }
    )(routeMap)
    app.use(router.routes())
    app.use(router.allowedMethods())
  }
};

export const Controller = path => (target, key, descriptor) => {
  // console.log({ target, key, descriptor })

  target.prototype[pathPrefix] = path
  // 下面这给return 应该可以注释掉吧
  return descriptor
}

export const setRouter = method => path => (target, key, descriptor) => {
  // console.log(target, key, descriptor)
  routeMap.push({
    target,
    method,
    path: resolvePath(path),
    callback: changeToArr(target[key])
  })
  // 下面这给return 应该可以注释掉吧
  return descriptor
}

export const GetMapping = setRouter('get')

export const PostMapping = setRouter('post')

export const PutMapping = setRouter('put')

export const DeleteMapping = setRouter('delete')

export const convert = middleware => (target, key, descriptor) => {
  target[key] = R.compose(
    R.concat(
      changeToArr(middleware)
    ),
    changeToArr
  )(target[key])

  return descriptor
}

export const Log = convert(async (ctx, next) => {
  logTimes++
  console.time(`${logTimes}: ${ctx.method} - ${ctx.url}`)
  await next()
  console.timeEnd(`${logTimes}: ${ctx.method} - ${ctx.url}`)
})
