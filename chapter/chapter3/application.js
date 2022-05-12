debugger
const request = require('supertest')
/**
 * application类的linsten方法封装了node的createServer
 * 1、初始化洋葱模型compose
 * 2、返回回调函数给createServer入参
 * 在回调函数进行了2个操作
 * 1、初始化ctx，将请求的request和response挂载到ctx对象上
 * 2、执行handleRequest
 *  执行洋葱模型的函数，结束后调用handleResponse处理
 */

/**
 * 调试new Koa可查看application总体
 * http.createServer(this.callback())
 */
const Koa = require('koa')
const app = new Koa()

/**
 * 可调试洋葱模型
 * use将中间层函数挂载到middleware数组中
 */
app.use(async (ctx, next) => {
  console.log('---1--->')
  await next();
  console.log('---6--->')
})

app.use(async (ctx, next) => {
  console.log('---2--->')
  await next();
  console.log('---5--->')
})

app.use(async (ctx, next) => {
  console.log('---3--->')
  await next();
  console.log('---4--->')
})



app.use(async (ctx, next) => {
  // throw Error('这里出错了！')
  // 异步操作中有异常，Koa是获取不到错误信息的
  // 导致进程异常退出
  setTimeout(() => {
    throw Error('这里出错了！')
  }, 1000)
  ctx.body = 'hello world'
})

process.on('uncaughtException', (error) => {
  console.log(error)
})


request(app.listen(4000))
  .get('/')
  .end(function(err, res) {
    if (err) throw err
    console.log(res)
  })
