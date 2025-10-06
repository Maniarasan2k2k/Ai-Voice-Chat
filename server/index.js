import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/db.js"
import authRouter from "./routes/authRoutes.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/userRoutes.js"
import geminiResponse from "./gemini.js"


const app=express()

const frontend=process.env.FRONT_END
app.use(cors({
    origin:frontend,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials:true
}))



const port=process.env.PORT
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)


app.listen(port,()=>{
    connectDb()
    console.log("server started",port)
})

app.use("/",(req,res)=>{
res.send("Hello")
})
