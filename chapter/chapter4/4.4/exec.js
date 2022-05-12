const child_process = require('child_process')

for (let i = 0; i < 3; i++) {
  const workerProcess = child_process.exec('node command.js ' + i, function (error, stdout, stderr) {
    if (error) {
      console.log(error.stack)
      console.log('Error code：' + error.code)
      console.log('Signal received：' + error.signal)
    }
    console.log('stdout：' + stdout)
    console.log('stderr：' + stderr)
  })
  
  workerProcess.on('exit', function (code) {
    console.log('子进程已退出，退出码' + code)
  })
}

// 可以看到，每个子进程pid都是不一样的，
// 说明exec方法确实创建了多个不同的进程来执行不同的任务。
// 这种模式如果遇到子进程有大量数据输出，就不太合适了，
// 这类情况用spawn来实现比较好，因为spawn的数据是通过流的方式返回的