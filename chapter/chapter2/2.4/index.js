const Koa = require("koa");
const path = require('path')
const views = require('koa-views')

const app = new Koa();


// app.use(views(path.join(__dirname, './view'), {
//   extension: 'ejs'
// }))
app.use(views(path.join(__dirname, './view'), {
  extension: 'pug'
}))

app.use(async (ctx) => {
  let title = 'koa'
  await ctx.render('index', {
    title
  })
})

app.listen(4000, () => {
  console.log("server is running, port is 4000");
});