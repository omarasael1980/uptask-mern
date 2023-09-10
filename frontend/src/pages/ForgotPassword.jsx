import { Link } from "react-router-dom"

const ForgotPassword = () => {
  return (
    < >
       <h1 className="text-white font-black text-6xl capitalize">Recupera tu acceso y administra tus 
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
      
      <input type="submit" value="Recuperar password" 
      className="bg-completedTask text-white w-full rounded-md py-2 mb-5
      hover:cursor-pointer hover:bg-completedTaskDark transition-colors uppercase font-bold"/>
    </form>
     <nav className="lg:flex lg:justify-between">
        <Link
        className="block text-white text-center my-5 text-slate-500 uppercase text-xs"
        to="/"
        > Ya tienes una cuenta? Inicia Sesión </Link>
           <Link
        className="block text-center text-white my-5 text-slate-500 uppercase text-xs"
        to="/registrar"
        > No tienes cuenta? Registrate</Link>
     </nav>
    </>
  )
}

export default ForgotPassword
