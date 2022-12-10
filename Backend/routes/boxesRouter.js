import express from "express";
import {createBox,readBox,updateBox,deleteBox} from "../controllers/boxesController.js";

const boxesRouter = express.Router()

boxesRouter.post("/", (req, res) =>{
    createBox(req, res)
})

boxesRouter.get("/:idBox", (req, res) =>{
    readBox(req, res)
})

boxesRouter.put("/:idBox", (req, res) =>{
    updateBox(req, res)
})

boxesRouter.delete("/:idBox", (req, res) =>{
    deleteBox(req, res)
})



export default boxesRouter;