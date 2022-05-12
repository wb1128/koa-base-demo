const Koa = require("koa")
const Router = require('koa-router')
const rewrite = require('koa-rewrite')
const fs = require('fs')

const app = new Koa()
const router = new Router()

app.use(rewrite('/api/getUserInfo', '/api/new/getUserInfo'))
app.use(router.routes())

router.get('/', async (ctx) => {
  ctx.set({ 'Content-Type': 'text/html'})
  ctx.body = fs.readFileSync('./index.html')
})

router.get('/api/getUserInfo', async (ctx) => {
  ctx.body = 'wwb'
})

router.get('/api/new/getUserInfo', async (ctx) => {
  ctx.body = 'test'
})


app.listen(4000, () => {})