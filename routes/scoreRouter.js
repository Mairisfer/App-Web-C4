import express from "express";
import Score from "../controllers/scoreController";

const scoreRouter = express.Router()

//Post
scoreRouter.get("/", (req, res) =>{
createScore(req, res)

})

//Read
scoreRouter.post("/", (req, res) =>{
readScore(req, res)
})

//Update
scoreRouter.put("/", (req, res) =>{
updateScore(req, res)
})

//Delete
scoreRouter.delete("/", (req, res) =>{
deleteScore(req, res)
})

export default scoreRouter;