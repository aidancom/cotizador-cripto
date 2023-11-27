import styled from '@emotion/styled'
import React from 'react'

const ParrafoError = styled.p`
  width: 100%;
  background-color: #FB7676;
  text-align: center;
  color: #fff;
  padding: 5px 0px;
  border-radius: 5px;
  font-family: Lato;
`

const Error = ({children}) => {
  return (
    <div>
      <ParrafoError>{children}</ParrafoError>
    </div>
  )
}

export default Error
