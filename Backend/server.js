import  express  from "express";
import connectDB from "./config/connectDB.js";
import dotenv from 'dotenv'
import authRoutes from './Routes/authRoutes.js'
import cors from 'cors'

dotenv.config()

connectDB();

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/v1/auth",authRoutes)

app.get("/",(req,res)=>{
    res.send(
        "<h1>hello</h1>"
    )
})


const PORT = process.env.PORT


app.listen(PORT,()=>{
    console.log("Server Running")
})

