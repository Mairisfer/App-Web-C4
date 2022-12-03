import mongoose from "mongoose";

const userShema = mongoose.Schema({
    "name": { type: String, minlength:6, maxlength:30, required: true },
    "username": { type: String, minlength: 5, maxlength: 12, required: true, unique: true },
    "password": { type: String, minlength: 5, maxlength: 12, required: true },
    "email": { type: String, required: true },
    "age": {
        type: Number,
        required: true,
        min: 18,
        max: 99,
        validate: {
            validator: validacionNeg,
            message: props => `${props.value} tiene que ser mayor a cero`
                }
        
    },
})

export default mongoose.model("clients", userShema)

function validacionNeg (v) {
    if (v < 0) {
        return true;
    } else {
        return false;
    }
}