const Koa = require("koa")
const Router = require('koa-router')
const cors = require('@koa/cors')

const app = new Koa()
const router = new Router()

app.use(cors({
  // origin: '*'
  origin: 'http://127.0.0.1:5500'
}))
app.use(router.routes())


router.get('/api/getUserInfo', async (ctx) => {
  ctx.body = 'wwb'
})


app.listen(4000, () => {})