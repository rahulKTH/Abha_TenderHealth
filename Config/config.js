import mysql from "mysql";
var connection = mysql.createConnection({
  host: 'deardoc-staging.cjtztruxn5wp.ap-south-1.rds.amazonaws.com',
  user: 'admin',
  password: 'U4UiK3kzK5t2IIdTZm7k',
  database: 'arogya_database_staging'
})

connection.connect(function(err) {
  
  if (err) throw err
  console.log('You are now connected...')
})

export default connection;
//module.exports = connection;
