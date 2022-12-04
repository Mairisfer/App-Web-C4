import express from "express";
import mongoose from 'mongoose';
import clientRouter from "./routes/clientRouter.js";
import boxesRouter from "./routes/boxesRouter.js";

const app=express();
const PORT = process.env.PORT || 8089

app.listen(PORT , () => console.log(`servidor Levantado ${PORT}`))

mongoose.connect("mongodb+srv://DBAppBoxes:usuario@dbappboxes.ozqotmo.mongodb.net/boxes-app?retryWrites=true&w=majority", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Te has conectado a la base de datos");
    }
    
})

app.use(express.json())
app.use("/client", clientRouter)
app.use('/boxes', boxesRouter)
/*
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use('/score', scoreRouter)
app.use('/boxes', boxesRouter)
app.use('/client', clientRouter)
app.use('/reservations', reservationsRouter)
*/
