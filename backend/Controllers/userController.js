import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updatedUser = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, message: "Successfully updated", data: updatedUser });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update" });
    }
};

export const deletedUser = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, message: "Successfully deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete" });
    }
};

export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id).select("-password");

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, message: "User found", data: user });
    } catch (err) {
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).select("-password");
        res.status(200).json({ success: true, message: "Users found", data: users });
    } catch (err) {
        res.status(500).json({ success: false, message: "Not found" });
    }
};

export const getUserProfile = async (req, res) => {
    const userId = req.userId;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        const { password, ...rest } = user._doc;
        res.status(200).json({ success: true, message: 'Profile info retrieved', data: { ...rest } });
    } catch (err) {
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
};

export const getMyAppointments = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.userId }).populate("doctor", "-password");

        res.status(200).json({
            success: true,
            message: "Appointments fetched",
            data: bookings,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch appointments",
        });
    }
};
