
import express from "express";
import { updatedUser, deletedUser, getSingleUser, getAllUsers, getUserProfile, getMyAppointments } from "../Controllers/userController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/:id",authenticate, restrict(["patient"]), getSingleUser);
router.get("/", authenticate, restrict(["admin"]), getAllUsers);
router.put("/:id", authenticate, restrict(["patient"]), updatedUser);
router.delete("/:id", authenticate, restrict(["patient"]), deletedUser);
router.get("/profile/me", authenticate, restrict(["patient"]), getUserProfile);
router.get("/appointments/me-appointments", authenticate, restrict(['patient']), getMyAppointments);

export default router;