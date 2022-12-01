import mongoose from "mongoose";

const reservationModel= mongoose.Schema({
    "_idReserv": Number,
    "dateRequest": Date,
    "dateReserv": Date,
    "status": String,
})
export default mongoose.model("reservation", reservationModel)