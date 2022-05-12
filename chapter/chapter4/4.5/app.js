
/**
 * 简单demo
 */
// const log4js = require('log4js')
// const logger = log4js.getLogger()
// logger.level = 'debug'
// logger.debug('some debug message')

/**
 * 不同级别的log
 */
// const log4js = require("log4js");
// const logger = log4js.getLogger()

// logger.level = 'all'
// logger.all('some all message')

// logger.level = 'trace'
// logger.trace('some trace message')

// logger.level = 'debug'
// logger.debug('some debug message')

/**
 * 日志分类
 */
// const log4js = require("log4js")
// // log4js.configure({
// //   appenders: { out: { type: 'stdout' } },
// //   categories: { default: { appenders: ["out"], level: "trace" } }
// // })

// log4js.configure({
//   appenders: { 
//     out: { type: 'stdout' },
//     app1: { type: 'file', filename: 'application1.log'},
//     app2: { type: 'file', filename: 'application2.log'},
//   },
//   categories: { 
//     default: { appenders: ["out"], level: "trace" },
//     app1: { appenders: ["app1"], level: "trace" },
//     app2: { appenders: ["app2"], level: "info" },
//   }
// })

// const logger = log4js.getLogger()
// logger.trace('this will use the default category and go to stdout')

// const app1Log = log4js.getLogger('app1')
// app1Log.trace('this will go to a file')

// // const app2Log = log4js.getLogger('app2')
// // app2Log.trace('this will go to a file')

// const app2Log = log4js.getLogger('app2')
// app2Log.info('this will go to a file')


/**
 * 日志分割
 */
const log4js = require("log4js")
log4js.configure({
  appenders: { 
    app: { 
      type: 'dateFile',
      filename: 'application',
      alwaysIncludePattern: true,
      pattern: 'yyyy-MM-dd-hh.log'
    } 
  },
  categories: { 
    default: { appenders: ["app"], level: "trace" },
    app: { appenders: ['app'], level: 'trace' }
  }
})

const appLog = log4js.getLogger('app')
appLog.trace("this will go to  a file")


