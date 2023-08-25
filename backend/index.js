import  express from "express"
import conectarDB from "./config/db.js"
import dotenv from 'dotenv'
const app = express()
//variables de entorno
dotenv.config()
 
//conectar DB
conectarDB()

//asignar variable de puerto produccion | desarollo
const PORT = process.env.PORT || 4000
//se abre servidor en el puerto 4000
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})