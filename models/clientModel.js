import mongoose from "mongoose";

const clientModel = mongoose.Schema({
    "name": String,
    "surname": String,
    "password": String,
    "email": String,
    "age":Number,
})

export default mongoose.model("clients", clientModel)