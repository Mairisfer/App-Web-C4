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