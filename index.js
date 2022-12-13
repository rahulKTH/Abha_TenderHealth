import express from "express";
import InsertAbha  from "./Routes/Abha.route.js";
const app = express()
app.use(express.json());

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

app.use('/abha',InsertAbha);



app.listen(44101,'0.0.0.0');