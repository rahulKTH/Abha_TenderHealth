import express from "express";
import InsertAbha  from "./Routes/Abha.route.js";
const app = express()

app.use(express.json());

app.use('/abha',InsertAbha);

app.listen(44102,'0.0.0.0');