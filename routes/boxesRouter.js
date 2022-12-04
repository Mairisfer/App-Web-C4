import express from "express";
import {createBox} from "../controllers/boxesController.js";

const boxesRouter = express.Router()

boxesRouter.post("/", (req, res) =>{
    createBox(req, res)
})

/*
boxesRouter.put("/", (req, res) =>{

})

boxesRouter.delete("/", (req, res) =>{

})

boxesRouter.get("/", (req, res) =>{
    
})

*/


export default boxesRouter;