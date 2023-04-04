import userModel from "../Model/userModel.js"
import userSchema from "../Model/userModel.js"

export const contactController = async (req,res) =>{
    try {
        const {cType,name,email,phone,company,comment} = req.body
        console.log(cType,name,email,phone,company,comment)
        if(!name){
            res.status(404).send({
                success:false,
                message:"name is req"
            })
        }
        else if(!email){
            res.status(404).send({
                success:false,
                message:"email is req"
            })
        }
        else if(!phone){
            res.status(404).send({
                success:false,
                message:"phone is req"
            })
        }
        else if(!company){
            res.status(404).send({
                success:false,
                message:"company is req"
            })
        }
        else if(!comment){
            res.status(404).send({
                success:false,
                message:"comment is req"
            })
        }
        else{
            res.status(200).send({
                success:true,
                message:"successfully"
            })
            const data = await userModel.insertMany({cType,name,email,phone,company,comment})
        }
        
    } catch (error) {
        console.log(error)
    }

}