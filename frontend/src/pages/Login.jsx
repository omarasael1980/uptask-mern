import { Link } from "react-router-dom"

const login = () => {
  return (
    <>
     
     
      <h1 className="text-white font-black text-6xl capitalize">Inicia sesión y administra tus 
      <span className="text-primary">  proyectos</span>
      </h1>
    <form className=" bg-white shadow mt-10 rounded-lg p-10">
      <div className="my-5 bg-white   " >
        <label  className="text-xl uppercase text-gray-300 block font-bold" htmlFor="email">Email:  </label>
        <input 
          type="email"
          placeholder="Email de registro"
          name="email"
          id="email"
          className="text-xl  w-full mt-3 p-3 border rounded-xl bg-gray-50"
        />
      </div>
      <div className="my-5 bg-white   " >
        <label  className="text-xl uppercase text-gray-300 block font-bold" htmlFor="email">Password:  </label>
        <input 
          type="password"
          placeholder="Password de Registro "
          name="password"
          id="password"
          className="text-xl  w-full mt-3 p-3 border rounded-xl bg-gray-50"
        />
      </div>
      <input type="submit" value="Iniciar Sesión" 
       className="bg-completedTask text-white w-full rounded-md py-2 mb-5
       hover:cursor-pointer hover:bg-completedTaskDark transition-colors uppercase font-bold" />
    </form>
     <nav className="lg:flex lg:justify-between">
        <Link
        className="block text-white text-center my-5 text-slate-500 uppercase text-xs"
        to="registrar"
        > No tienes una cuenta? Registrate </Link>
           <Link
        className="block text-center text-white my-5 text-slate-500 uppercase text-xs"
        to="olvide-password"
        > Olvide mi password </Link>
     </nav>

      
    </>
  )
}

export default login
