import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Menu from './Menu.jsx'

function App() {
  const [codigo, setCodigo] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: ""
  })

  const getUser = (codigo) => {
   fetch(`https://reqres.in/api/users/${codigo}`)
   .then((resposta) => resposta.json())
   .then((json) => {
    if(json.data){
      setUser(json.data)
    }
   })
  }

  useEffect(() => {
    getUser(codigo)
  },[codigo])
  
  const alerta = () => {
    alert('Olá')
  }

  const handleSubmit = () =>{
    e.preventDefault()
    console.log(nome)
    console.log(email)
  }

  return (
    <>
      <Menu title="Site"/>     
      <p onClick={alerta}>Dados </p>
      <p>Nome: {user.first_name} {user.last_name}</p>
      <p>Email: {user.email}</p>
      <hr />
      <form>
      <input onChange={(e) => {setCodigo(e.target.value)}} type="text" placeholder='Digite o código' />
      <input onChange={(e) => {setNome(e.target.value)}} type="text" placeholder='Digite seu nome' />
      <input onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder='Digite seu email' />
      <button onClick={handleSubmit}>Cadastrar</button>
      </form>
    </>
  )
}

export default App
