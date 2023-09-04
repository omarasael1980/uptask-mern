import  express from "express"
import conectarDB from "./config/db.js"
import dotenv from 'dotenv'
import usuarioRoutes from './routes/usuarioRoutes.js'
import proyectoRoutes from './routes/proyectoRoutes.js'
const app = express()
//habilitar lectura de jhson
app.use(express.json())
//variables de entorno
dotenv.config()
 
//conectar DB
conectarDB()
// routing
app.use('/api/usuarios',usuarioRoutes )
app.use('/api/proyectos',proyectoRoutes )
//asignar variable de puerto produccion | desarollo
const PORT = process.env.PORT || 4000
//se abre servidor en el puerto 4000
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})