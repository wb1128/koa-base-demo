const { spawn } = require('child_process')

const child = spawn('node', ['child.js'], {
  stdio: [null, null, null, 'pipe']
})


child.stdio[1].on('data', data => {
  console.log(`来自子进程消息${data.toString()}`)
})


// 运行没有达到预期输出