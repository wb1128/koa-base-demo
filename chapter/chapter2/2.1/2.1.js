const Koa = require('koa')
const app = new Koa()

// app.use(async (ctx) => {
//   ctx.body = 'hello world'
// })

app.use(async (ctx, next) => {
  console.log('1')
  await next()
  console.log('6')
})

app.use(async (ctx, next) => {
  console.log('2')
  await next()
  console.log('5')
})

app.use(async (ctx, next) => {
  console.log('3')
  await next()
  console.log('4')
})


app.listen(4000, () => {
  console.log('server is running, port is 4000')
})

