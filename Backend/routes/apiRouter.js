import express from "express";
import { login } from "../modules/authModule.js";
import clientRouter from "../routes/clientRouter.js";

const apiRouter = express.Router();

apiRouter.get("/login", login);
apiRouter.use("/client", clientRouter);
apiRouter.use("/register", clientRouter);

export default apiRouter;