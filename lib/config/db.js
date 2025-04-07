import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ddas19682:uspncB6NvpEoKih2@cluster0.vokibh8.mongodb.net/blog-app?retryWrites=true&w=majority");
    console.log("DB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};
