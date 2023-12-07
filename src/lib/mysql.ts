import mysql from 'mysql2'

const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'Merrick!234',
  database: 'zefir',
})

export default connection.promise()
