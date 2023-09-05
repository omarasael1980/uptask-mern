import express from 'express';
import {    
    obtenerProyecto, 
    obtenerProyectos, 
    nuevoProyecto, 
    editarProyecto, 
    eliminarProyecto, 
    eliminarColaborador,
 
    agregarColaborador} from '../controllers/proyectoController.js'
import checkAuth from '../middleware/checkAuth.js'

const router = new express.Router()
router.route('/')
    .get(checkAuth, obtenerProyectos)
    .post(checkAuth, nuevoProyecto)
router.route('/:id')
    .get(checkAuth, obtenerProyecto)
    .put(checkAuth, editarProyecto)
    .delete(checkAuth, eliminarProyecto)
 
router.post('/agregar-colaborador/:id',checkAuth ,agregarColaborador) 
router.post('/eliminar-colaborador/:id', checkAuth, eliminarColaborador) 


export default router