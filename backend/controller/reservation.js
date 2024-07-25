import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

const send_reservation=async(req,res,next)=>{
    const{firstName,lastName,email,date,time,phone}=req.body;
    if(!firstName || !lastName ||  !email || !date || !time){
        return next(new ErrorHandler("Please Fill Full Reservation From",400));
    }
    try{
        await Reservation.create({firstName, lastName, email, date, time, phone });
        res.status(200).json({
            success:true,
            message:"Reservation Sent Successfully",
        });
    }
    catch(error){
        // handle mongoose validation error
        if(error.name==='ValidationError'){
            const validationErrors=Object.values(error.errors).map(err=>err.message);
            return next(new ErrorHandler(validationErrors.join(", "),400));
        }

        //handle other errors
        return next(error);
    }
};

export default send_reservation;