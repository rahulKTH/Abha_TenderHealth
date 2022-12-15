import express from "express";
import InsertAbha  from "./Routes/Abha.route.js";
const app = express()
//console.log("Listening to APP")
app.use(express.json());

//console.log("APP",app)
app.use('/abha',InsertAbha);



// app.listen(44101,'0.0.0.0');
app.listen(44100, () => {
  console.log(`Server is running on port ${44100}`);
});