import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log("Conexión a MongoDb todo ok 🤔")
} catch (error) {
    console.log("Error de conexion a MongoDb😥"+ error)
};