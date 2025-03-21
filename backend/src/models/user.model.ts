import mongoose, { model, Schema } from 'mongoose';
import jwt from "jsonwebtoken"
import { config } from "../config"
import bcrypt from 'bcrypt';
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// define a pre hook for the userSchema
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next()
})
userSchema.methods.comparePassword = function (password: string) {
    return bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function (userId: mongoose.Types.ObjectId) {
    return jwt.sign(
        { id: userId },
        config.accessTokenSecret,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    )
}
export const User = model('User', userSchema);