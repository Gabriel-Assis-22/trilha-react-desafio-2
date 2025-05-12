import React from 'react'
import { ButtonConteiner } from './styles'
function Button({onClick}) {
  return (
    <ButtonConteiner onClick={onClick}>
      Buscar
    </ButtonConteiner>
  )
}

export default Button
