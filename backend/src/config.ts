import dotenv from "dotenv";
import process from "process";

dotenv.config();

if (!process.env.ACCESS_TOKEN_SECRET) {
    throw new Error("Missing ACCESS_TOKEN_SECRET in environment variables.");
}
if (!process.env.ACCESS_TOKEN_EXPIRY) {
    throw new Error("Missing ACCESS_TOKEN_EXPIRY in environment variables.");
}

export const config = {
    mongoUrl: process.env.MONGO_URL || "", 
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET as string,
    accessTokenExpiry: process.env.ACCESS_TOKEN_EXPIRY || "1d",
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || "R9dGfV2&zTx5o@qW$LM8uJ4y7n*3",
    refreshTokenExpiry : process.env.REFRESH_TOKEN_EXPIRY || '10d'
};
