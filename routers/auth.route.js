import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import {body} from 'express-validator'
import { validationResultExpress } from "../middlewares/validationResultExpress.js";

const router = express.Router();// es un middleware para poder gestionar las rutas ver doc

router.post("/register",[
    body('email', "El formato del email es incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    body('password', " Minimo 6 caracteres")
        .trim()
        .isLength({ min:6 }),
        body('password', "El formato de password es incorrecto")
        .custom((value, {req})=>{
            if(value !== req.body.repassword){
                throw new Error(" La contraseña no coincide")
            }
            return value
        },
    ),
],
    validationResultExpress,
    register);
   
router.post("/login", [
    body('email', "El formato del email es incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    body('password', " Minimo 6 caracteres")
        .trim()
        .isLength({ min:6 })
    ],
    validationResultExpress,
    login );


export default router;