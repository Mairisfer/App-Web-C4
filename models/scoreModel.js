import mongoose from "mongoose";

const scoreModel = mongoose.Schema({
    "_idScore": Number,
    
})

export default mongoose.model("score", scoreModel)