const fs = require('fs')
const starttime = Date.now()
let endtime

fs.readFile('package.json', () => {
  endtime = Date.now()
  console.log('finish reading time: ', endtime - starttime)
})

let index = 0

function handler () {
  if (index++ >= 1000) return
  // console.log(`nextTick ${index}`)
  // process.nextTick(handler)
  console.log(`setImmediate ${index}`)
  setImmediate(handler)
}

handler()