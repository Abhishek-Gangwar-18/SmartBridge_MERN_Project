import express from "express";
import { updatedDoctor, deletedDoctor, getSingleDoctor, getAllDoctor, getDoctorProfile } from "../Controllers/doctorController.js";
import {authenticate, restrict} from "../auth/verifyToken.js";
// import reviewRouter from './review.js';


const router = express.Router({mergeParams: true});
// router.use("/:doctorId/reviews", reviewRouter);

router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctor);
router.put("/:id", updatedDoctor);
router.delete("/:id", deletedDoctor);
router.get('/profile/me',authenticate,restrict(['doctor']),getDoctorProfile);
export default router;