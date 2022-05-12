const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'learnkoa',
  database: 'koadb'
})

connection.connect()

const sql = `insert into tbl_users(username, nickname) values('liujianghong', '刘江虹')`
connection.query(sql, function(error, results, fields) {
  if (error) throw error
  console.log('the results is：', results)
})