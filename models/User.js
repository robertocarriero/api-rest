import {Schema, model} from "mongoose";

const userSchema = new Schema({
    email:{
        type: String,
        required: true, // Validamos diciendo que este dato es requerido
        trim : true, // limpia los campos a la derecha e izquierda
        unique : true, // es decir que el email es unico no hay otro usuario que se pueda registrar con ese email
        lowercase : true, // puede ingresar con mayusculas o minusculas que es lo mismo
        index : {unique: true}, // indexar los datos si hay muchos usuarios la busqueda es mas rapida
    },
     password:{
        type: String,
        required: true, // Validamos diciendo que este dato es requerido
     },
});

export const user = model('user', userSchema)