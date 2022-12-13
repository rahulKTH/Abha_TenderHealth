import express from "express"
import { InsertAbha } from "../Controller/Abha.controller.js";
import { VerifyAbhaAbha } from "../Controller/Abha.controller.js";
import { Getuserdata } from "../Controller/Abha.controller.js";
import { ForgotHealthId } from "../Controller/Abha.controller.js";
import { FindHealthId } from "../Controller/Abha.controller.js";
import { createHealthIdWithPreVerified } from "../Controller/Abha.controller.js";
const router = express.Router();
router.post("/adhar_otp",InsertAbha);
router.post("/verifyOtp",VerifyAbhaAbha);
router.post("/forgotHealthid",ForgotHealthId);
router.post("/findhealthid",FindHealthId);
router.post("/createHealthIdWithPreVerified",createHealthIdWithPreVerified);
router.get("/getuserdata",Getuserdata);

export default router;