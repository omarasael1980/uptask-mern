import  express from "express"
import conectarDB from "./config/db.js"
import dotenv from 'dotenv'
import cors from 'cors'
import usuarioRoutes from './routes/usuarioRoutes.js'
import proyectoRoutes from './routes/proyectoRoutes.js'
import tareaRoutes from './routes/tareaRoutes.js'
const app = express()
//habilitar lectura de jhson
app.use(express.json())
//variables de entorno
dotenv.config()
 
//conectar DB
conectarDB()
//implementar cors
const whitelist = [process.env.FRONTEND_URL, process.env.FRONTEND_URL_2]
 
const corsOptions = {
    origin: function(origin,callback) {
        if(whitelist.includes(origin)){
            //puede consultar la api
            callback(null,true)
        }else{
            //impedir request 
            callback(new Error("Error de Cors"))
        }
    }
}
app.use(cors(corsOptions))
// routing
app.use('/api/usuarios',usuarioRoutes )
app.use('/api/proyectos',proyectoRoutes )
app.use('/api/tareas',tareaRoutes )
//asignar variable de puerto produccion | desarollo
const PORT = process.env.PORT || 4000
//se abre servidor en el puerto 4000
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})