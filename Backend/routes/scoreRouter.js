import express from "express";
import {createScore,updateScore,deleteScore,readScore} from "../controllers/scoreController.js";

const scoreRouter = express.Router()

//Post
scoreRouter.get("/:idScore", (req, res) =>{
    readScore(req, res)
})

//Read
scoreRouter.post("/", (req, res) =>{
    createScore(req, res)
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
