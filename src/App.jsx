import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Cripto from './assets/img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Header = styled.h1`
  font-size: 30px;
  color: #fff;
  font-family: Lato;
  text-align: center;
  font-weight: 700;
  margin: 100px 0px 50px 0px;
  
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    margin: 10px auto auto;
    background-color: #fff;
    display: block;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 100%;
  display: block;
  margin: 100px auto 0 auto
`

function App() {
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  useEffect(() => {
    if(Object.keys(monedas).length > 0) {
      const cotizarCript = async() => {
        const {moneda, criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado.DISPLAY[criptomoneda][moneda])
      }
      cotizarCript()
      
    }
  }, [monedas])
  return (
    <>
    <Contenedor>
      <Imagen src={Cripto} alt='imagen de cripto'/>
      <div>
        <Header>Cotiza Criptomonedas</Header>
        <Formulario setMonedas={setMonedas}/>
        {resultado.PRICE && <Resultado resultado={resultado}/>}
      </div>

    </Contenedor>

    </>
  )
}

export default App
