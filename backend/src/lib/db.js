import mongoose from "mongoose";
import dotenv from "dotenv";

// Load biến môi trường từ file .env
dotenv.config();

export const connectDB = async () => {
  try {
    // Kết nối tới MongoDB
    const conn = await mongoose.connect(process.env.MONGDB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Tắt server nếu kết nối lỗi
  }
};
