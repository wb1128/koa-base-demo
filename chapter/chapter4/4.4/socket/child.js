const net = require('net')
const pipe = net.Socket({ fd: 1 })

pipe.write('hello master process!', 'utf8', (data) => {
  console.log(data)
})

// setInterval(() => {
//   pipe.write('hello master process!')
// }, 3000)