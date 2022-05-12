const Koa = require("koa");
const fs = require('fs')
const Router = require("koa-router");
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
const Store = require('./store')
const shortid = require('shortid')

const app = new Koa();
const router = new Router()

const redisConfig = {
  redis: {
    port: 6379,
    host: '127.0.0.1',
    password: ''
  }
}
const sessionConfig = {
  key: 'koa:sess',
  maxAge: 86400000,
  signed: false,
  store: new Store(redisConfig),
  genid: () => shortid.generate()
}



app.use(session(sessionConfig, app))
app.use(bodyParser())
app.use(router.routes())

router.get('/', async (ctx) => {
  ctx.set({ 'Content-Type': 'text/html'})
  ctx.body = fs.readFileSync('./index.html')
})

router.post("/login", async (ctx) => {
  const postData = ctx.request.body
  if(ctx.session.usr) {
    ctx.body = `欢迎，${ctx.session.usr}`
  } else {
    ctx.session = postData
    ctx.body = '你第一次登录系统'
  }
})

app.listen(4000, () => {
  console.log("server is running, port is 4000");
});
