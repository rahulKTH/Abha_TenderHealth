import express from "express"
import { SearchMobile } from "../Controller/Abha.controller.js";
import { InsertAbha } from "../Controller/Abha.controller.js";
import { VerifyAbhaAbha } from "../Controller/Abha.controller.js";
import { InsertMobile } from "../Controller/Abha.controller.js";
import { VerifyAbhaMobile } from "../Controller/Abha.controller.js";
import { Getuserdata } from "../Controller/Abha.controller.js";
import { ForgotHealthId } from "../Controller/Abha.controller.js";
import { FindHealthId } from "../Controller/Abha.controller.js";
import { createHealthIdWithPreVerified } from "../Controller/Abha.controller.js";
const router = express.Router();
router.post("/SearchMobileInAbha",SearchMobile);
router.post("/SendOtpUsingAdhar",InsertAbha);
router.post("/VerifyOtpUsingAdhar",VerifyAbhaAbha);
router.post("/SendOtpUsingMobile",InsertMobile);
router.post("/VerifyOtpUsingMobile",VerifyAbhaMobile);
router.post("/RegisterAdharInAbha",createHealthIdWithPreVerified);
router.post("/GetOtpForgotHealthId",ForgotHealthId);
router.post("/FindHealthIdUsingOtp",FindHealthId);

router.get("/getuserdata",Getuserdata);

export default router;