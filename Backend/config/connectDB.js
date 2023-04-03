import mongoose from "mongoose";



export default function connectDB() {

    const conn = mongoose.connect(process.env.MONGO_URL)
    if(conn){
        console.log("database connected")
    }
    else{
        console.log("error connecting database")
    }
}
