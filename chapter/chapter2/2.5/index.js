const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require('koa-bodyparser')

const app = new Koa();
const router = new Router()
app.use(bodyParser())

router.get('/api/get/userInfo', async (ctx) => {
  const { name } = ctx.request.query
  ctx.body = `请求参数为${name}`
})
router.post('/api/update/userInfo', async (ctx) => {
  const { name } = ctx.request.body
  ctx.body = `请求参数为${name}`
})
app.use(router.routes())

app.listen(4000, () => {
  console.log("server is running, port is 4000");
});
