import express from "express";
import { authenticate } from "../auth/verifyToken.js";
import { getCheckoutSession } from "../models/BookingController.js";

const router = express.Router();
router.post("/checkout-session/:doctorId/:userId", authenticate, getCheckoutSession);
export default router;