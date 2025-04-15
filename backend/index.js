import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
// import reviewRoute from "./Routes/review.js";
dotenv.config()
import bookingRoute from "./Routes/booking.js";



const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origin: true
}

// Middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/bookings", bookingRoute);
// app.use("/api/v1/reviews", reviewRoute);

// Test route
app.get('/', (req, res) => {
    res.send('App is working')
})

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB connected successfully")
    
    // Start the server only after DB connects
    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`)
    })
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err)
  })
