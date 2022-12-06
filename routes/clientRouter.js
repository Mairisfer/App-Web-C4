import express from "express";
import { createClient, deleteClient, readClient, updateClient } from "../controllers/clientController.js";
import mwPruebas from "../Middelwares/mwPruebas.js";
import validateToken from "../Middelwares/validateToken.js";

const clientRouter = express.Router()

//Crear
//POST
clientRouter.post("/", mwPruebas, (req, res) => {
    createClient(req, res)
})
//Leer
//GET
clientRouter.get("/", validateToken, (req, res) => {
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