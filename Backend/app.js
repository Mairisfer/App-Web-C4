import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose, { mongo } from "mongoose";
import clientRouter from "./routes/clientRouter.js";
import boxesRouter from "./routes/boxesRouter.js";
import scoreRouter from "./routes/scoreRouter.js";
import reservationsRouter from "./routes/reservationsRouter.js";

import apiRouter from "./routes/apiRouter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8089;

app.listen(port, () => {
  console.log(`servidor Levantado ${port}`);
});

mongoose.set("strictQuery", true);

mongoose.connect(
  "mongodb+srv://DBAppBoxes:usuario@dbappboxes.ozqotmo.mongodb.net/boxes-app?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Se ha conectado a la base de datos.");
    }
  }
);

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use("/api", apiRouter);
app.use("/", (req, res) => res.json("Bienvenido a TuPalco!"));
app.use("/client", clientRouter);
app.use("/reservations", reservationsRouter);
app.use("/boxes", boxesRouter);
app.use("/score", scoreRouter);

/*
app.use('/score', scoreRouter)
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use('/score', scoreRouter)

app.use('/client', clientRouter)


app.use("/test", testRouter)
*/
