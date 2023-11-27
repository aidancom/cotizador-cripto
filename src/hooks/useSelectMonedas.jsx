import {useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-family: Lato;
  padding: 5px 0px;
`
const Select = styled.select`
  width: 100%;
  margin: 10px 0px;
  padding: 10px 0px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  font-size: 15px
`
const useSelectMonedas = (label, opciones) => {

  const [state, setState] = useState('');

  const SelectMonedas = () => (
    <>
      <Label>
        {label}
      </Label>
        <br/>
      <Select value={state} onChange={e => setState(e.target.value)}>
        <option value="">- Seleccione su moneda- </option>
        {opciones.map(opcion => (
          <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
        ))}
      </Select>
      
    </>
  )

  return [state, SelectMonedas]
}

export default useSelectMonedas
