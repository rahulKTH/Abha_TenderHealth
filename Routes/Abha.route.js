import express from "express"
import { SearchUsingMobile } from "../Controller/Abha.controller.js";
import { GenerateAdharOTP } from "../Controller/Abha.controller.js";
import { VerifyAdharOTP } from "../Controller/Abha.controller.js";
import { GenerateMobileOTP } from "../Controller/Abha.controller.js";
import { VerifyMobileOTP } from "../Controller/Abha.controller.js";
import { createHealthIdWithPreVerified } from "../Controller/Abha.controller.js";
import { Getuserdata } from "../Controller/Abha.controller.js";
import { ResendOtpUsingMobile } from "../Controller/Abha.controller.js";
import { ForgotHealthId } from "../Controller/Abha.controller.js";
import { FindHealthId } from "../Controller/Abha.controller.js";
import { SearchAbhaById, ResendAdharOtp, AuthInitAbha, AuthConfirmAdharOtp } from "../Controller/Abha.controller.js";

const router = express.Router();
router.post("/search_using_mobile",SearchUsingMobile);
router.post("/generate_otp_using_adhar",GenerateAdharOTP);
router.post("/verify_otp_using_adhar",VerifyAdharOTP);
router.post("/generate_otp_using_mobile",GenerateMobileOTP);
router.post("/verify_otp_using_mobile",VerifyMobileOTP);
router.post("/create_health_id_with_preverified",createHealthIdWithPreVerified);
router.post("/resend_otp_using_mobile",ResendOtpUsingMobile);
router.post("/get_otp_forgot_health_id",ForgotHealthId);
router.post("/find_health_id_using_otp",FindHealthId);
router.get("/getuserdata",Getuserdata);
router.post("/search_using_abha_id",SearchAbhaById);
router.post("/resend_adhar_otp",ResendAdharOtp);
router.post("/login_abha",AuthInitAbha);
router.post("/login_confirm_otp",AuthConfirmAdharOtp);

export default router;