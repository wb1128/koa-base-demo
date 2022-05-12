const request = require('supertest')


const Koa = require("koa")
const glob = require('glob')
const path = require('path')

const app = new Koa()

// 文件路由

// actions的绝对路径
const basePath = path.resolve(__dirname, './actions')
// 获取actions目录下所有的.js文件，并返回其绝对路径
const filesList = glob.sync(path.resolve(__dirname, './actions', '**/*.js'))

// 文件路由映射表
let routerMap = {}
filesList.forEach(item => {
  const { method, handler } = require(item)
  // 获取相对路径 例如：goods/getInfo.js
  // split(path.sep).join('/')，兼容window。本身路径是不需要处理，但是此处要的是路径的字符串
  const relative = path.relative(basePath, item).split(path.sep).join('/')
  // 获取文件后缀
  const extname = path.extname(item)
  // 剔除后缀.js，并在前面加一个/， 形成： /goods/getInfo
  const fileRouter = '/' + relative.split(extname)[0]
  // 连接method，形成一个唯一请求，例如：_GET_/goods/getInfo
  const key = `_${method}_${fileRouter}`
  // 保存在路由表里
  routerMap[key] = handler
})

app.use(async (ctx, next) => {
  const { path, method } = ctx
  const key = `_${method}_${path}`
  if(routerMap[key]) {
    routerMap[key](ctx)
  } else {
    ctx.body = 'no this router'
  }
})

// /user/getInfo
request(app.listen(4000))
  .get('/goods/getInfo')
  .end(function(err, res) {
    if (err) throw err
    console.log(res.text)
  })
