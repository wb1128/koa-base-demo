// spawn尽管比exec的使用场景多一些，
// 但是对于主子进程频繁通信的场景支持得不好，
// 这个时候可以通过fork的方式创建子进程

const child_process = require('child_process')

for (let i = 0; i < 3; i++) {
  const workerProcess = child_process.fork('command.js', [i])

  workerProcess.on('exit', function (code) {
    console.log('子进程已退出，退出码' + code)
  })
}