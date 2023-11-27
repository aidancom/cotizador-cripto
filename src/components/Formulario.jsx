import styled from '@emotion/styled'
import {useEffect, useState} from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'
import Error from './Error'

const Boton = styled.input`
  width: 100%;
  color: #fff;
  padding: 5px;
  margin-top: 20px ;
  border-radius: 5px;
  border: 5px solid #224588;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #69A4FB;
  transition: 0.5s ease all;
  &:hover {
    border: 5px solid transparent;
    background-color: #224588;
  }
`


const Formulario = ({setMonedas}) => {
  const monedas = [
    {
      id: 'USD', 
      nombre: 'Dolar de Estados Unidos'
    },
    {
      id: 'MXN', 
      nombre: 'Peso Mexicano'
    },
    {
      id: 'EUR', 
      nombre: 'Euro'
    },
    {
      id: 'GBP', 
      nombre: 'Libra Esterlina'
    }
  ]
  useEffect(() => {
    const consulta = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=MXN";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const criptos = resultado.Data.map(cripto => {
        const objeto =  {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        return objeto
    })
    setCriptomonedas(criptos)
    } 
    consulta()
  }, [])
  const [criptomonedas, setCriptomonedas] = useState([])
  const [moneda, SelectMonedas] = useSelectMonedas('Elige la moneda', monedas)
  const [criptomoneda, Selectcriptomoneda] = useSelectMonedas('Elige tu criptomoneda', criptomonedas)
  const [validar, setValidar] = useState(false)
  const handelSubmit = e => {
    e.preventDefault();
    if([moneda, criptomoneda].includes('')) {
      setValidar(true);
      setTimeout(() => {
        setValidar(false)
      }, 3000)

    } else {
      setValidar(false)
      setMonedas({moneda, criptomoneda})
    }
  }


  return (
    <form onSubmit={handelSubmit}>
      {validar ? <Error>Algun campo vacio</Error> : ""}
      <SelectMonedas />
      <Selectcriptomoneda />
      <Boton type='submit' value='Cotizar' />
    </form>
  )
}

export default Formulario
