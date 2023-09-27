import { useParams, Link } from "react-router-dom";
import useProyectos from "../hooks/useProyectos";
import { useEffect } from "react";

const Proyecto = () => {
  const params = useParams();
  const { obtenerProyecto, proyecto, cargando } = useProyectos();

  // el useEffect recupera el id de la url
  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);
  //obteniendo datos del proyecto
  const { nombre, descripcion, fechaEntrega, cliente, _id, creador } = proyecto;

  return cargando ? (
    //mientras carga se ve animacion 
    <div className="bg-background rounded-lg flex-1">
      <button
        type="button"
        className="  text-completedTask font-bold  items-center text-5xl text-center flex justify-between p-5 rounded-md"
        disabled
      >
         <img src="\src\assets\images\wait.gif" alt="wait" className="w-20 h-20 animate-bounce" />
          {'     '}Procesando
      </button>
    </div>
  ) : (
    <div className="bg-background rounded-lg p-10 flex justify-between">
      <h1 className="font-black text-4xl uppercase">{`Proyecto: ${nombre}`}</h1>
      <div className="flex items-center gap-4 font-bold text-textSecondary hover:text-completedTask ">      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>
<Link 
    className="uppercase font-bold"
    to={`/proyectos/editar/${params.id}`}>Editar</Link>
      </div>
    </div>
  );
};

export default Proyecto;
