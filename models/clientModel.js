import mongoose from "mongoose";

const userShema = mongoose.Schema({
    "name": { type: String, required: true },
    "username": { type: String, required: true, unique: true },
    "password": { type: String, required: true },
    "email": { type: String, required: true },
    "age": { type: Number, required: true },
})

export default mongoose.model("clients", userShema)