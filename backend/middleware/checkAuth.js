import  jwt from "jsonwebtoken"
import Usuario from "../models/Usuarios.js"
const checkAuth = async (req, res, next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
     try {
        // revisar token
        token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.usuario = await Usuario.findById(decoded.id).select(
            '-password -confirmado -createdAt -updatedAt -token -__v')
       
            return next()
         
     } catch (error) {
        return res.status(404).json({msg: 'Hubo un error'})
     }   
    }
     
    if(!token){
        const error = new Error('Token no válido')
        if(token == null){
          return res.status(301).json({msg: "No tienes autorización"})
        }else{
            return res.status(301).json({msg: error})
        }
       
    }
    next()
}

export default checkAuth