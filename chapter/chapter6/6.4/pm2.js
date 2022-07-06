const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()

router.get('/user/getInfo', async (ctx) => {
  ctx.body = 'my name is koa'
})

app.use(router.routes())

app.listen(4000, () => {
  console.log('server is running ')
})