import mysql from "mysql";
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'arogya_database_staging'
})

connection.connect(function(err) {
  
  if (err) throw err
  // connection.query("Select * from abha_user", function (err, result, fields) {
  //   if (err) throw err;
  //     console.log(result);
  //   });
  console.log('You are now connected...')
})

export default connection;
//module.exports = connection;
