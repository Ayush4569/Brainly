import dotenv from 'dotenv'
dotenv.config({ path: './.env' })
import express,{Request,Response,NextFunction} from 'express'
import {  } from './models/user.model';


const app = express();
app.use(express.json({ limit: '16kb' }))

// routes

app.post("/api/v1/signup", async (req:Request, res:Response,next:NextFunction) => {
    const { username, password } = req.body;
    try {
        const isUserExist = await User.findOne({ username })
        if (isUserExist) {
            return res.status(411).json("User already exist")
        }
        const user = await User.create({ username, password })
       if (user) {
            return res.status(201).json("user signup successfully")
        }
        return res.status(400).json("user signup failed")
    } catch (error) {
        console.log(error);
        next(error)
        return res.status(500).json("Internal server error")
    }
})
app.post("/api/v1/signin", (req, res) => { })
app.get("/api/v1/content", (req, res) => { })
app.post("/api/v1/content", (req, res) => { })
app.delete("/api/v1/content", (req, res) => { })
app.post("/api/v1/brain", (req, res) => { })
app.delete("/api/v1/brain/:sharedLink", (req, res) => { })