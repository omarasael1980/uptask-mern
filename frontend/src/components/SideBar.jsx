import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
const SideBar = () => {
  const {auth} = useAuth()
  return (
    <aside className="md:w-80 lg:w-96 px-5 py-10 ">
        <p className="text-xl  font-bold text-background text-center">Hola: {auth.nombre}</p>
        <Link 
            to="/proyectos/crear-proyecto" 
            className="bg-primary w-full p-3 text-white uppercase font-bold text-center rounded-md shadow-md 
             block mt-5 hover:bg-warning hover:text-black transition-colors">
                Nuevo Proyecto</Link>
    </aside>
  )
}

export default SideBar
