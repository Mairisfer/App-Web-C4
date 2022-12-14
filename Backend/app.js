import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import mwPruebas from "./Middelwares/mwPruebas.js";
import clientRouter from "./routes/clientRouter.js";
import loginRouter from "./routes/loginRouter.js";
import boxesRouter from "./routes/boxesRouter.js";
//import scoreRouter from "./routes/scoreRouter.js";
import reservationsRouter from "./routes/reservationsRouter.js";

const app = express();

const port = process.env.PORT || 8089;

app.listen(port, () => {
  console.log(`servidor Levantado ${port}`);
});

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
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use("/client", clientRouter);
app.use(mwPruebas);
app.use("/login", loginRouter);
app.use("/reservations", reservationsRouter);
app.use("/boxes", boxesRouter);

/*
app.use('/score', scoreRouter)
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use('/score', scoreRouter)

app.use('/client', clientRouter)


app.use("/test", testRouter)
*/
