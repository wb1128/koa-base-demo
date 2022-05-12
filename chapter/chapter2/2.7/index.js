const Koa = require("koa")
const path = require('path')
const fs = require('fs')
const static = require('koa-static')
const Router = require('koa-router')
const koaBody = require("koa-body")
const send = require('koa-send')

const app = new Koa()
const router = new Router()

const staticPath = './static'

app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200 * 1024 * 1024
  }
}))

app.use(static(
  path.join(__dirname, staticPath)
))

app.use(router.routes())

router.post('/upload', async(ctx) => {
  const file = ctx.request.files.file
  const data = fs.readFileSync(file.filepath)
  fs.writeFileSync(path.join(__dirname, staticPath, `${file.newFilename}.${file.mimetype.split('/')[1]}`), data)
  ctx.body = { message: '上传成功' }
})

router.get('/download/:name', async(ctx) => {
  const name = ctx.params.name
  const path = `${staticPath}/${name}`
  ctx.attachment(name)
  await send(ctx, path)
})


app.listen(4000, () => {})