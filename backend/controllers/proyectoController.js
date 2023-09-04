import Proyecto from '../models/Proyecto.js'


const obtenerProyectos =async (req, res)=>{
//si lo dejo hasta .find traera todos se le pone .where.equals para filtrar
    const proyectos  = await Proyecto.find().where('creador').equals(req.usuario)
    res.json(proyectos)

}
const nuevoProyecto =async (req, res)=>{
 const proyecto = new Proyecto(req.body)
 proyecto.creador = req.usuario._id
 try {
    const proyectoAlmacenado = await proyecto.save()
    res.json(proyectoAlmacenado)

 } catch (error) {
    console.log(error)
 }

}
const obtenerProyecto = async (req, res) => {
    const { id } = req.params;
  
    try {
      const proyecto = await Proyecto.findById(id.trim());
  
      // Si no se encuentra el proyecto
      if (!proyecto) {
        return res.status(404).json({ msg: 'Proyecto no encontrado' });
      }
  
      // Verificar si el que quiere ver el proyecto tiene los permisos porque es creador
      if (proyecto.creador.toString() !== req.usuario.id.toString()) {
        return res.status(401).json({ msg: 'Acción no válida' });
      }
  
      res.json(proyecto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Error interno del servidor, posiblemente NO EXISTE' });
    }
  };
   
const editarProyecto =async (req, res)=>{
    const { id } = req.params;
  
    try {
      const proyecto = await Proyecto.findById(id.trim());
  
      // Si no se encuentra el proyecto
      if (!proyecto) {
        return res.status(404).json({ msg: 'Proyecto no encontrado' });
      }
  
      // Verificar si el que quiere ver el proyecto tiene los permisos porque es creador
      if (proyecto.creador.toString() !== req.usuario.id.toString()) {
        return res.status(401).json({ msg: 'Acción no válida' });
      }
      proyecto.nombre = req.body.nombre || proyecto.nombre 
      proyecto.descripcion = req.body.descripcion || proyecto.descripcion 
      proyecto.fechaEntrega = req.body.fechaEntrega || proyecto.fechaEntrega 
      proyecto.cliente = req.body.cliente || proyecto.cliente 
     try {
        const proyectoAlmacenado1 = await proyecto.save() 
        res.json(proyectoAlmacenado1)
    } catch (error) {
        console.error(error)
     }
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Error interno del servidor, posiblemente NO EXISTE' });
    }
 
}
const eliminarProyecto =async (req, res)=>{
    const { id } = req.params;
  
    try {
      const proyecto = await Proyecto.findById(id.trim());
  
      // Si no se encuentra el proyecto
      if (!proyecto) {
        return res.status(404).json({ msg: 'Proyecto no encontrado' });
      }
  
      // Verificar si el que quiere ver el proyecto tiene los permisos porque es creador
      if (proyecto.creador.toString() !== req.usuario.id.toString()) {
        return res.status(401).json({ msg: 'Acción no válida' });
      }
      //eliminar el proyecto
      try {
        await proyecto.deleteOne()
        res.json({msg: 'Proyecto eliminado'})
        
      } catch (error) {
        console.log(error);
      }
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Error interno del servidor, posiblemente NO EXISTE' });
    }
}
const agregarColaborador =async (req, res)=>{
    
}
const eliminarColaborador =async (req, res)=>{
    
}
const obtenerTareas =async (req, res)=>{
    
}

export {
    obtenerProyecto, 
    obtenerProyectos, 
    nuevoProyecto, 
    editarProyecto, 
    eliminarProyecto, 
    eliminarColaborador,
    obtenerTareas,
    agregarColaborador
}