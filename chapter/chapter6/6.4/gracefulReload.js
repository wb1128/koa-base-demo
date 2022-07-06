const { exec } = require('child_process')


const kill = function(pid) {
  exec(`taskkill /pid ${pid} /f`, (err, stdout) => {
    if (err) {
      console.log(`执行 taskkill /pid ${pid} /f 时，发生错误：${err}`)
      return;
    }
    console.log(`stdout: ${stdout}`)
  })
}
kill('16036')
module.exports = kill