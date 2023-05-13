import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Menu from './Menu.jsx'

function App() {
  const [codigo, setCodigo] = useState('1')
  const [titulo, setTitulo] = useState('')
  const [tipo, setTipo] = useState('')
  const [cidade, setCidade] = useState('')
  const [bairro, setBairro] = useState('')
  const [venda, setVenda] = useState(false)
  const [aluguel, setAluguel] = useState(false)
  const [num_quartos, setNum_Quartos] = useState('')
  const [area_m2, setArea_m2] = useState('')
  const [valor, setValor] = useState('')
  const [imovel, setImovel] = useState({
    titulo: "",
    tipo: "",
    cidade: "",
    bairro: "",
    venda: false,
    aluguel: false,
    num_quartos: "",
    area_m2: 0.00,
    valor: 0.00
  })

  const getImovel = (codigo) => {
    fetch(`https://api-imobiliaria-xt97.onrender.com/imoveis/${codigo}`)
      .then((resposta) => resposta.json())
      .then((json) => {
        console.log(json)  
              
        if (json)
          setImovel(json)    
      
      })
  }

  // método chamado na renderização da página
  useEffect(() => {
    // if(codigo === ""){
    //   codigo = 1
    // }

    getImovel(codigo)
  }, [codigo])

  const alerta = () => {
    alert('Olá')
  }

  const handleSubmit = () => {
    e.preventDefault()
    console.log(nome)
    console.log(email)
  }

  return (
    <>
      <Menu title="Imobiliaria Projeto integrador" />
      <div>
        <p onClick={alerta}>Dados do imóvel:</p>
        <p>Titulo: {imovel.titulo}</p>
        <p>Tipo: {imovel.tipo}</p>
        <p>Cidade: {imovel.cidade}</p>
        <p>Bairro: {imovel.bairro}</p>
        <p>Venda: {imovel.venda}</p>
        <p>Aluguel: {imovel.aluguel}</p>
        <p>Num quartos: {imovel.num_quartos}</p>
        <p>Area: {imovel.area_m2}</p>
        <p>Valor: {imovel.valor}</p>
      </div>
      <hr />
      <form>
        <input onChange={(e) => { setCodigo(e.target.value) }} type="text" placeholder='Digite o codigo' />
        <input onChange={(e) => { setTitulo(e.target.value) }} type="text" placeholder='Digite o titulo' />
        <input onChange={(e) => { setTipo(e.target.value) }} type="text" placeholder='Digite o tipo' />
        <input onChange={(e) => { setCidade(e.target.value) }} type="text" placeholder='Digite a cidade' />
        <input onChange={(e) => { setBairro(e.target.value) }} type="text" placeholder='Digite' />
        <input onChange={(e) => { setVenda(e.target.value) }} type="checkbox" placeholder='Digite' />
        <input onChange={(e) => { setAluguel(e.target.value) }} type="checkbox" placeholder='Digite' />
        <input onChange={(e) => { setNum_Quartos(e.target.value) }} type="text" placeholder='Digite' />
        <input onChange={(e) => { setArea_m2(e.target.value) }} type="text" placeholder='Digite' />
        <input onChange={(e) => { setValor(e.target.value) }} type="text" placeholder='Digite' />
        <button onClick={handleSubmit}>Cadastrar</button>
      </form>
    </>
  )
}

export default App
