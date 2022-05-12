const elasticsearch = require('elasticsearch')
const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
})
// 启动需配置非https
client.ping({
  requestTimeout: 1000
}, (error) => {
  if (error) {
    console.trace("elasticsearch cluster is down!")
  } else {
    console.log('all is well')
  }
})

client.create({
  index: 'student2',
  op_type: 'create',
  id: '2',
  body: {
    name: 'liujianghong2',
    sex: 'male',
    age: 29
  }
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})