import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="px-4 py-5 bg-white border-b">
        <div className="md:flex md:justify-between">
            <h2 className="text-4xl font-extrabold text-primary   text-center">
                Uptask
            </h2>
            <input  
                type="search"
                placeholder="Buscar Proyecto"
                className="rounded-lg  lg:w-96 block p-2 border"/>
            <div className="flex items-center gap-4">
                <Link 
                    to='/proyectos'
                    className="font-extrabold uppercase">
                    Proyectos
                </Link>
                <button 
                type="button"
                className="text-white bg-primary p-2 uppercase font-bold 
                rounded-md shadow-lg hover:bg-warning hover:text-black transition-colors">Cerrar Sesión</button>
            </div>
           
        </div>
    </header>
  )
}

export default Header
