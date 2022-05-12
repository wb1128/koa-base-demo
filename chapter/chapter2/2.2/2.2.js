const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();


// app.use(async (ctx) => {
//   const url = ctx.request.url;
//   let content = "";
//   switch (url) {
//     case "/api/get/userInfo":
//       content = "200: this is getUserInfo";
//       break;
//     case "/api/update/userInfo":
//       content = "200: this is updateUserInfo";
//       break;
//     default:
//       content = "404: not router match";
//       break;
//   }
//   ctx.body = content
// });



const router = new Router()

router.get('/api/get/userInfo', async (ctx) => {
  ctx.body = '200: this is getUserInfo'
})

router.get('/api/update/userInfo', async (ctx) => {
  ctx.body = '200: this is updateUserInfo'
})

app.use(router.routes()).use(async (ctx) => {
  ctx.body = '404: not router match'
})

app.listen(4000, () => {
  console.log("server is running, port is 4000");
});
