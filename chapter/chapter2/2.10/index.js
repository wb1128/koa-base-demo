const Koa = require('koa')
const Router = require('koa-router')
const error = require('koa-error')

const app = new Koa()
const router = new Router()

app.use(error({
  engine: 'pug',
  template: __dirname + '/error.pug'
}))
app.use(router.routes())

router.get('/api/getUserInfo', async (ctx) => {
  if(ctx.query.name !== 'test') {
    // ctx.body = '400：用户名不是test'
    // return

    throw Error("出现异常")
  }
  ctx.body = '200：test'
})

app.listen(4000)