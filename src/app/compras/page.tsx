"use client"
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext } from "../context";

export default function Compras() {

    const {user, login, logout} = useContext(AuthContext) //usando o contexto que está dentro do AuthContext

  const [dados, setDados] = useState({
    telefone: "",
    pedido: "",
    valor: ""
  })

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target
    setDados({...dados, [name] : value})
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault() //bloqueia todos os padrões que tem. No caso, ele sobe automaticamente todos os dados, mas queremos que eles fiquem
    login(dados)
  }

  return(
    <main className="flex flex-col items-center justify-center p-10">
      <span className="text-2xl text-indigo-800 mb-2">{user?.telefone == "" ? "Fazer o login" : user?.telefone}</span>

      <h1 className="text-center text-4xl text-indigo-600 font-bold">home</h1>
      <form className="w-96 bg-indigo-300 border-indigo-950 p-5 rounded-md" onSubmit={handleSubmit}>
        <div className="py-2">
          <input className="border-2 border-gray-400 p-2 w-full" type="text" placeholder="Telefone" name="telefone" value={dados.telefone}
          onChange={handleChange} required/>
        </div>
        <div>
          <input className="border-2 border-gray-400 p-2 w-full" type="text" placeholder="Pedido" name="pedido" value={dados.pedido} 
          onChange={handleChange} required/>
        </div>
        <div>
          <input className="border-2 border-gray-400 p-2 w-full" type="password" placeholder="Valor" name="valor" value={dados.valor} 
          onChange={handleChange} required/>
        </div>
        <button className="rounded-md bg-green-700 text-white p-2 m-3" type="submit">Fazer pedido</button>
       {user?.telefone == "" ? "" :(<button className="rounded-md bg-red-700 text-white p-2 m-3" onClick={logout}>Cancelar</button>)}

      </form>
    </main>
  )
}
