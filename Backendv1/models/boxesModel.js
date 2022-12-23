import mongoose from "mongoose";

const boxesShema = mongoose.Schema({
    "idBox": {type: Number, minlength:1, maxlength:10, required: true },
    "capacity": {type: Number, minlength: 1, maxlength: 10, required: true, unique: true },
    "description": {type: String, minlength: 5, maxlength: 300, required: true },
    "location": {type: String, minlength: 5, maxlength: 20,required: true },
    "category": {type: String, required: true},
})

export default mongoose.model("boxes", boxesShema)