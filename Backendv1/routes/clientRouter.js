import express from "express";
import {
  createClient,
  deleteClient,
  readClient,
  updateClient,
} from "../controllers/clientController.js";
import validatePassword from "../Middelwares/validatePassword.js";

const clientRouter = express.Router();

clientRouter.post("/", validatePassword, createClient);
clientRouter.get("/", readClient);
clientRouter.patch("/", updateClient);
clientRouter.delete("/", deleteClient);

export default clientRouter;

/*Crear
//POST
clientRouter.post("/", mwPruebas, (req, res) => {
  createClient(req, res);
});
//Leer
//GET
clientRouter.get("/", tokenGeneration, (req, res) => {
  readClient(req, res);
});
//Actualizar
//PUT
clientRouter.patch("/:username", (req, res) => {
  updateClient(req, res);
});
//Eliminar
//DELETE
clientRouter.delete("/:username", (req, res) => {
  deleteClient(req, res);
});
*/
