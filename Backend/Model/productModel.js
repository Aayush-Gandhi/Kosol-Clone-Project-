import mongoose from "mongoose"


const userScheme = mongoose.Schema({
        date:{
            type:Number,
            default:"form"
        },
        author:{
            type:String,
            required:true
        },
        product:{
            type:String,
            required:true,
            unique:true
        },
        title:{
            type:Number,
            required:true,
        },
        info:{
            type:String,
            required:true,
        },
        info1:{
            type:String,
            required:true,
        }

    },{timestamps:true})

    export default mongoose.model('contact',userScheme);

