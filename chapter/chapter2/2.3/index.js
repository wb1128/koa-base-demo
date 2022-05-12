const Koa = require("koa");
const path = require('path')
const fs = require('fs')
const MIMES_MAP = {
  'css': 'text/css',
  'html': 'text/html',
  'jpg': 'image/jpeg'
}

const app = new Koa();

const staticPath = './static'

function parseMime(url) {
  let extName = path.extname(url)
  extName = extName ? extName.slice(1) : 'unknown'
  return MIMES_MAP[extName]
}

app.use(async (ctx) => {
  let fullStaticPath = path.join(__dirname, staticPath)

  let content = fs.readFileSync(path.join(fullStaticPath, ctx.url), 'binary')

  // html有中文
  if(ctx.url === '/index.html') {
    content = fs.readFileSync(path.join(fullStaticPath, ctx.url), 'utf-8')
  }
  let mime = parseMime(ctx.url)
  if(mime) {
    ctx.type = mime
  }

  if(mime && mime.indexOf('image/') >= 0) {
    // 如果是图片,则用Node原生res,输出二进制数据
    ctx.res.writeHead(200)
    ctx.res.write(content, 'binary')
    ctx.res.end()
  } else {
    ctx.body = content
  }
})

app.listen(4000, () => {
  console.log("server is running, port is 4000");
});