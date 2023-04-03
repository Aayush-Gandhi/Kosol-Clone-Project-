import mongoose from "mongoose"


const userScheme = mongoose.Schema({
        field_type:{
            type:String,
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

    })

    export default mongoose.model('contact',userScheme);

