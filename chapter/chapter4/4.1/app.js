const request = require('supertest')


const Koa = require("koa")
const registerRouter = require('./routers')
const app = new Koa()

// 1.路由分割
app.use(registerRouter())

// /user/getInfo
request(app.listen(4000))
  .get('/goods/getInfo')
  .end(function(err, res) {
    if (err) throw err
    console.log(res)
  })
