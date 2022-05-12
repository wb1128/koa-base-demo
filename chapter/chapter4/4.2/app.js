const path = require('path')

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const static = require('koa-static')
const { sign } = require('jsonwebtoken')
const koaJwt = require('koa-jwt')

const app = new Koa()
const router = new Router()

const secret = 'my_secret'
const jwt = koaJwt({ secret })

app.use(bodyParser())
app.use(static(path.join(__dirname, './static')))

router.post('/login', async (ctx, next) => {
  const { userName } = ctx.request.body
  if (userName) {
    const token = sign({ userName }, secret, { expiresIn: '1h'})
    ctx.body = {
      message: 'get token success',
      code: 1,
      token
    }
  } else {
    ctx.body = {
      message: 'param error',
      code: -1
    }
  }
})
.get('/welcome', jwt, async (ctx, next) => {
  ctx.body = {
    message: 'welcome!!'
  }
})

app
.use(router.routes())
.use(router.allowedMethods())

app.listen(4000)