import styled from '@emotion/styled'
import React from 'react'

const Caja = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`
const Imagen = styled.img`
  width: 70%;
`

const CajaImagen = styled.div`
  width: 40%;
`

const Resultado = ({resultado}) => {
  const { PRICE, HIGHHOUR, LOWHOUR, IMAGEURL, LASTUPDATE, CHANGEPCT24HOUR } = resultado
  return (
    <Caja>
      <CajaImagen>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} />
      </CajaImagen>
      <div>
        <p>El precio es de: {PRICE}</p>
        <p>Precio mas alto del dia: {HIGHHOUR}</p>
        <p>Precio mas bajo del dia: {LOWHOUR}</p>
        <p>Variacion ultimas 24 horas {CHANGEPCT24HOUR}</p>
        <p>Ultima Actualizacion: {LASTUPDATE}</p>
      </div>
     
    </Caja>
  )
}

export default Resultado
