import express from "express"
import { InsertAbha } from "../Controller/Abha.controller.js";
const router = express.Router();
router.post("/adhar_otp",InsertAbha);

export default router;