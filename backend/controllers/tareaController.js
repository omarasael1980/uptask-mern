import Proyecto from "../models/Proyecto.js"
import Tarea from "../models/Tarea.js"

 

const agregarTarea = async (req, res) => {
     
    const { proyectoAsociado } = req.body;

    const existeProyecto = await Proyecto.findById(proyectoAsociado);
  
    if (!existeProyecto) {
      const error = new Error("El Proyecto no existe");
      return res.status(404).json({ msg: error.message });
    }
  
    if (existeProyecto.creador.toString() !== req.usuario._id.toString()) {
      const error = new Error("No tienes los permisos para añadir tareas");
      return res.status(403).json({ msg: error.message });
    }
  
    try {
      const tareaAlmacenada = await Tarea.create(req.body);
      // Almacenar el ID en el proyecto
      existeProyecto.tareas.push(tareaAlmacenada._id);
      await existeProyecto.save();
      res.json(tareaAlmacenada);
    } catch (error) {
      console.log(error); 
    }
    
  
}
const obtenerTarea = async (req, res) => {
   const {id} = req.params
   const tarea = await Tarea.findById(id).populate("proyectoAsociado")
   if(!tarea){
    const error = new Error("La tarea no existe ")
    return res.status(403).json({msg: error.message})
   }
   if(tarea.proyectoAsociado.creador.toString() != req.usuario.id.toString()) {
    const error = new Error("No es válida esta acción ")
    return res.status(404).json({msg: error.message})
   }
  
   res.json(tarea)
}
const actualizarTarea = async (req, res) => {
    const {id} = req.params
   const tarea = await Tarea.findById(id).populate("proyectoAsociado")
   if(!tarea){
    const error = new Error("La tarea no existe ")
    return res.status(403).json({msg: error.message})
   }
   if(tarea.proyectoAsociado.creador.toString() != req.usuario.id.toString()) {
    const error = new Error("No es válida esta acción ")
    return res.status(404).json({msg: error.message})
   }
   tarea.nombre = req.body.nombre || tarea.nombre
   tarea.descripcion = req.body.descripcion || tarea.descripcion
   tarea.prioridad = req.body.prioridad || tarea.prioridad
   tarea.fechaEntrega = req.body.fechaEntrega || tarea.fechaEntrega
  try {
    
    const tareaActualizada = await tarea.save()
    res.json(tareaActualizada)
  } catch (error) {
    console.log(error)
  }

  
}
const eliminarTarea = async (req, res) => {
    const {id} = req.params
   const tarea = await Tarea.findById(id).populate("proyectoAsociado")
   if(!tarea){
    const error = new Error("La tarea no existe ")
    return res.status(403).json({msg: error.message})
   }
   if(tarea.proyectoAsociado.creador.toString() != req.usuario.id.toString()) {
    const error = new Error("No es válida esta acción ")
    return res.status(404).json({msg: error.message})
   }
   
  try {
    
    await tarea.deleteOne()
    res.json({msg: 'Tarea eliminado'})
  } catch (error) {
    console.log(error)
  }


}
const cambiarEstadoTarea = async (req, res) => {}

export {
    agregarTarea,
    obtenerTarea,
    actualizarTarea,
    eliminarTarea,
    cambiarEstadoTarea 
}  