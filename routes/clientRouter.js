import express from "express";
import { createClient, deleteClient, readClient, updateClient } from "../controllers/clientController.js";

const clientRouter = express.Router()

//Crear
//POST
clientRouter.post("/", (req, res) => {
    createClient(req, res)
})
//Leer
//GET
clientRouter.get("/:username", (req, res) => {
    readClient(req, res)
})
//Actualizar
//PUT
clientRouter.patch("/:username", (req, res) => {
    updateClient(req, res)
})
//Eliminar
//DELETE
clientRouter.delete("/:username", (req, res) => {
    deleteClient(req, res)
})

export default clientRouter;