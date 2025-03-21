import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    const dbUrl: string = process.env.MONGO_URL ?? ''
    try {
        const connectionInstance = await mongoose.connect(dbUrl)
        console.log("MONGODB CONNECTED!!", connectionInstance.connection.host);
    } catch (error) {
        console.error("Error connecting to database:", error);
        throw new Error("Error connecting database");
    }
}