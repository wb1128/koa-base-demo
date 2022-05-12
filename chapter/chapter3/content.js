
// delegate用法
const delegate = require('delegates')
const obj = {}
obj.request = {
  name: 'liu',
  age: 29,
  sex: 'man',
  say: function() {
    console.log('hello world')
  }
}
// 委托
delegate(obj, 'request')
  .method('say')
  .getter('name')
  .setter('nickname')
  .access('age')

obj.say()
obj.nickname = 'SK'
console.log('nickname：', obj.request.nickname)
console.log('现在年龄：', obj.age)
obj.age = 30
console.log('明年年龄：', obj.age)



// 调试cookie
const request = require('supertest')
const Koa = require("koa");
const app = new Koa();
app.use(async (ctx) => {
  ctx.cookies.set(
    'koa-cookie',
    '123456'
  )
  ctx.cookies.get('koa-cookie')
  ctx.body = '设置成功'
})
request(app.listen(4000))
  .get('/')
  .end(function(err, res) {
    if (err) throw err
    console.log(res)
  })
