process.on('message', (msg) => {
  console.log('子进程收到主进程的消息：', msg)
})

process.send('hello master process！')