import express from "express";
import InsertAbha  from "./Routes/Abha.route.js";
import cors from 'cors';
const app = express()

//console.log("Listening to APP")
app.use(express.json());

app.use(cors());
app.options('*',cors());
//console.log("APP",app)
app.use('/abha',InsertAbha); 


// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

// app.listen(44101,'0.0.0.0');
app.listen(44100, () => {
  console.log(`Server is running on port ${44100}`);
});