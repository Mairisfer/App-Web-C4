import express from "express";
import {
  createReservation,
  deleteReservation,
  readReservation,
  updateReservation,
} from "../controllers/reservationsController.js";

const reservationsRouter = express.Router();

reservationsRouter.post("/", (req, res) => {
  createReservation(req, res);
});

reservationsRouter.get("/", readReservation);

/*reservationsRouter.put("/:idReserv", (req, res) => {
  updateReservation(req, res);
});

reservationsRouter.delete("/:idReserv", (req, res) => {
  deleteReservation(req, res);
});*/

export default reservationsRouter;
