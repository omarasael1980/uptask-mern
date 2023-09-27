import { Link } from "react-router-dom"

const PreviewProyecto = ({proyecto}) => {
 
  const {nombre, descripcion, fechaEntrega, cliente, _id}= proyecto
   
  return (
    <div className="border-b p-5 flex">
        <p className="flex-1">
          {nombre }
          <span className="text-sm uppercase font-bold text-completedTask">
              {' '}{cliente}
          </span>
        </p>
        <Link 
          to={`${_id}`}
          className="uppercase text-text   text-sm font-bold hover:text-completedTask"
          >
            Ver Proyecto
        </Link>
    </div>
  )
}

export default PreviewProyecto
