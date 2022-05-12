const compose = require("koa-compose")
const glob = require("glob")
const { resolve } = require('path')
console.log(resolve(__dirname, './actions', '**/*.js'))
registerRouter = () => {
  let routers = [];
  glob.sync(resolve(__dirname, './', '**/*.js'))
    // 排除index.js文件
    .filter(val => (val.indexOf('index.js') === -1))
    .forEach(router => {
      // router.routes()的作用，注册路由使路由生效
      routers.push(require(router).routes())
      // 执行allowedMethods，当method不对应时返回：状态码为 405， 响应内容为 Method Not Allowed
      // 否则状态码为 404， 响应内容为 Not Found
      routers.push(require(router).allowedMethods())
    })
  return compose(routers)
}

module.exports = registerRouter