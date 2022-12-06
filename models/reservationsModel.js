import mongoose from "mongoose";


const reservationModel= mongoose.Schema({
    "idReserv": {type: Number, minlength:1, maxlength:4, required: true, unique:true},
    "dateRequest": {type:Date, default:Date.now},
    "dateReserv": {type:Date, require:true},
    "status": { type: Boolean, default:true },
},{timestamps: true})

export default mongoose.model("reservation", reservationModel)