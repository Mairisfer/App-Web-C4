import express from "express";
import Score from "../controllers/scoreController";

const scoreRouter = express.Router()

//Post
scoreRouter.get("/:idScore", (req, res) =>{
createScore(req, res)

})

//Read
scoreRouter.post("/", (req, res) =>{
readScore(req, res)
})

//Update
scoreRouter.put("/:idScore", (req, res) =>{
updateScore(req, res)
})

//Delete
scoreRouter.delete("/:idScore", (req, res) =>{
deleteScore(req, res)
})

export default scoreRouter;