"use client"
import { createContext, useState } from "react";

export type UserProps = {
    telefone: string;
    pedido: string;
    valor: string;
}

type AuthContextProps = {
    user: UserProps | null;
    login: (user:UserProps)=>void;
    logout: ()=>void;
}



const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider = ({children}:{children:React.ReactNode})=>{

    //Aqui é o local em que o nome do usuário é inserido
const [ user, setUser] = useState<UserProps>(
    {
        telefone: "",
        pedido: "",
        valor: ""
    } 
)

const login =(user:UserProps) => {
    setUser(user)
}

//sair do usuario
const logout = () =>{
    setUser({telefone:"", pedido:"", valor:""})
}

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}