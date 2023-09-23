import {useState, useEffect, createContext} from 'react'
import clienteAxios from '../config/clienteAxios'
const AuthContext = createContext()
const AuthProvider =({children})=>{
    const [auth, setAuth]= useState({})
    useEffect(()=>{
        const autenticarUsuario = async ()=>{
            const token = localStorage.getItem('token')
            if(!token){
                return
            }
            const config = {
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {

                const {data} = await clienteAxios('/usuarios/perfil', config)
                console.log(data)
            } catch (error) {
                console.log(error.response)
            }

            console.log(token)
        }

        return ()=>autenticarUsuario()
   
    },[])
    return(
        <AuthContext.Provider
            value={{
                setAuth,
                auth
                 
            }}>
            {children}
        </AuthContext.Provider> 
    )
}

export{
    AuthProvider
}
export default AuthContext