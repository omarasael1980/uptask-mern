import { useState, useEffect, useContext, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";

const ProyectosContext = createContext()

const ProyectosProvider =({children})=>{

    //listas de proyectos de un cliente
    const [proyectos, setProyectos] = useState([])
    // alertas de error
    const [alerta, setAlerta]=useState({})
    // proyecto unitario
    const [proyecto, setProyecto]=useState({})
    const [cargando, setCargando]=useState(false)

    useEffect(()=>{
        const obtenerProyectos = async ()=>{
           
            //se cargan los proyectos del usuario
            try {
                const token = localStorage.getItem('token')
               // console.log(token)
                if(!token){
                    return
                }
                const config = {
                    headers:{
                        "Content-Type": "application/json",
                        Authorization:`Bearer ${token}`
                    }
                }
                const {data} = await clienteAxios('/proyectos', config)
                setProyectos(data)
                 
            } catch (error) {
              console.log(error.message)
            }
        }
        obtenerProyectos()
    },[])
    const navigate = useNavigate()
    const mostrarAlerta = alerta=>{
        setAlerta(alerta)
        setTimeout(()=>{
            setAlerta({})
        },5000)
    }
    const submitProyecto = async(proyecto)=>{
        if(proyecto.id){
           await editarProyecto(proyecto)
        }else{
           await crearProyecto(proyecto)
        }
       
    }
    
    const editarProyecto = async proyecto => { 
        try {
            const token = localStorage.getItem('token')
           // console.log(token)
            if(!token){
                return
            }
            const config = {
                headers:{
                    "Content-Type": "application/json",
                    Authorization:`Bearer ${token}`
                }
            }
            const {data} = await clienteAxios.put(`/proyectos/${proyecto.id}`,proyecto, config)
        
          
       // Sincronizar el state
       const proyectosActualizados = proyectos.map(proyectoState => proyectoState._id === data._id ? data : proyectoState)
       setProyectos(proyectosActualizados)
         //mostrar alerta 
         // redireccionar
            setAlerta({
                msg:'Proyecto Actualizado Correctamente',
                error: false
            })
            //despues de tres segundos limpiamos alerta y redirigimos a proyectos
            setTimeout(()=>{
                setAlerta({})
                navigate('/proyectos')
            },3000)


        } catch (error) {
          console.log(error.message)
        }
    }
    const crearProyecto = async proyecto => {
        try {
            const token = localStorage.getItem('token')
           // console.log(token)
            if(!token){
                return
            }
            const config = {
                headers:{
                    "Content-Type": "application/json",
                    Authorization:`Bearer ${token}`
                }
            }
            const {data} = await clienteAxios.post('/proyectos',proyecto, config)
            setProyectos([...proyectos,data])
            setAlerta({
                msg:'Proyecto Creado Correctamente',
                error: false
            })
            //despues de tres segundos limpiamos alerta y redirigimos a proyectos
            setTimeout(()=>{
                setAlerta({})
                navigate('/proyectos')
            },3000)


        } catch (error) {
          console.log(error.message)
        }
     }

     //===========Funcion para obtener un proyecto por id ==========
    const obtenerProyecto = async (id) => {
         //se habilita cargando
         setCargando(true)
     try {
        //recuperar token del localstorage
        const token = localStorage.getItem('token')
          
         // verificar si existe el token
         if(!token){
            return
        }
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${token}`
            }
        }
        const {data} = await clienteAxios(`/proyectos/${id}`, config)
        
       setProyecto(data)
      
     } catch (error) {
        console.log(error.message)
     }finally{
        //este tiempo es para que se vea animacion de cargar
        setTimeout(()=>{
            setCargando(false)
        },500)
        
    }
    }
    const eliminarProyecto = async id=>{
    try {
         //recuperar token del localstorage
         const token = localStorage.getItem('token')
          
         // verificar si existe el token
         if(!token){
            return
        }
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization:`Bearer ${token}`
            }
        }
        const {data} = await clienteAxios.delete(`/proyectos/${id}`, config)
        setAlerta({
            msg: data.msg,
            error:false
        })
        setTimeout(()=>(
            setAlerta({})
        ),2000)
        // eliminar del state 
        const proyectoActualizado =proyectos.filter(proyectoState=>proyectoState._id !== id)
        console.log('proyectoActualizado',proyectoActualizado)
        setProyectos(proyectoActualizado)
        navigate('/proyectos')
        
    } catch (error) {
     console.log(error.message)   
    }
       }
    return(
        <ProyectosContext.Provider
            value={{
                proyectos,
                mostrarAlerta, 
                alerta,
                submitProyecto,
                obtenerProyecto,
                proyecto,
                cargando, 
                eliminarProyecto
            
                

                 
            }}>
                {children}
        </ProyectosContext.Provider>
    )
}
export {
    ProyectosProvider
}
export default ProyectosContext