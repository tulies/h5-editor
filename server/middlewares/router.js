import { resolve } from 'path'
import Route from '../decorator/router'

const r = path => resolve(__dirname, path)

export const router = (app) => {
  const apiPath = r('../routes')
  const router = new Route(app, apiPath)
  router.init()
}
