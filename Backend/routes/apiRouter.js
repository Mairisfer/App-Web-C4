import express from "express";
import { login } from "../modules/authModule.js";
import clientRouter from "../routes/clientRouter.js";
import reservationsRouter from "../routes/reservationsRouter.js";
import boxesRouter from "../routes/boxesRouter.js";

const apiRouter = express.Router();

apiRouter.get("/login", login);
apiRouter.use("/client", clientRouter);
apiRouter.use("/register", clientRouter);
apiRouter.use("/reservations", reservationsRouter);
apiRouter.use("/boxes", boxesRouter);

export default apiRouter;
