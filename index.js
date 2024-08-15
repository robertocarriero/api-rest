import 'dotenv/config'
import express from "express";
import "./database/connectdb.js";
import authRouter from "./routers/auth.route.js";


const app= express();

//app.use o app.get etc es un middleware que esta entre las rutas y los controller
app.use(express.json());// habilitamos las solicitudes ´para que pueda leer en Json
app.use("/api/V1", authRouter);//Colocando api/V1 ya esta disponible para todas las rutas que llamemos con authRouter

app.get("/", (req, res )=>{res.json({ok: 5000})});
const PORT= process.env.PORT || 5000
app.listen(PORT, console.log("🔺🔺🔺🔺 http://localhost:"+ PORT));