import express from "express"
import { InsertAbha } from "../Controller/Abha.controller.js";
import { VerifyAbhaAbha } from "../Controller/Abha.controller.js";
const router = express.Router();
router.post("/adhar_otp",InsertAbha);
router.post("/verifyOtp",VerifyAbhaAbha);

export default router;