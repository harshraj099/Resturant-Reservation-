import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"first name must be of at least 3 characters."],
        maxLength:[30,"First name cannot exceed 30 Characters."],
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"first name must be of at least 3 characters."],
        maxLength:[30,"First name cannot exceed 30 Characters."],
    },
    email:{
        type : String ,
        required: true,
        validate:[validator.isEmail,"Provide a valid email!"],
    },
    phone:{
        type : String,
        required:true,
        minLength:[10,"phone number must contain 10 Digits!"],
        maxLength:[10,"phone number must contain 10 Digits!"],
    },
    time:{
        type : String,
        required: true,
    },
    date:{
        type : String ,
        required: true,
    },
});

export const Reservation =mongoose.model("Reservation", reservationSchema);