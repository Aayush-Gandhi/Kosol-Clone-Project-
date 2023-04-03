import  express  from "express";
import { contactController } from "../Controller/authController.js";

const route = express.Router()


route.post("/contactus",contactController)

export default route