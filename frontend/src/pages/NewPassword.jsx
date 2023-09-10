 

const newPassword = () => {
  return (
    < >
    
    <h1 className="text-white font-black text-6xl capitalize">Restablece tu password y administra tus 
      <span className="text-primary">  proyectos</span>
      </h1>
    <form className=" bg-white shadow mt-10 rounded-lg p-10">
      
      <div className="my-5 bg-white   " >
        <label  className="text-xl uppercase text-gray-300 block font-bold" htmlFor="password">Nuevo password:  </label>
        <input 
          type="password"
          placeholder="Tu nuevo password"
          name="password"
          id="password"
          className="text-xl  w-full mt-3 p-3 border rounded-xl bg-gray-50"
        />
      </div>
      <div className="my-5 bg-white   " >
        <label  className="text-xl uppercase text-gray-300 block font-bold" htmlFor="password2">Confirma tu  password:  </label>
        <input 
          type="password"
          placeholder="Repite tu password "
          name="password2"
          id="password2"
          className="text-xl  w-full mt-3 p-3 border rounded-xl bg-gray-50"
        />
      </div>
      <input type="submit" value="Guardar nuevo password" 
       className="bg-completedTask text-white w-full rounded-md py-2 mb-5
       hover:cursor-pointer hover:bg-completedTaskDark transition-colors uppercase font-bold" />
    </form>
    
    </>
  )
}

export default newPassword
