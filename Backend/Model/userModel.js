import mongoose from "mongoose"


const userScheme = mongoose.Schema({
        cType:{
            type:String,
            default:"form"
        },
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        phone:{
            type:Number,
            required:true,
        },
        company:{
            type:String,
            required:true,
        },
        comment:{
            type:String,
            required:true,
        }

    },{timestamps:true})

    export default mongoose.model('contact',userScheme);

