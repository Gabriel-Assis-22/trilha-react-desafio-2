import React from 'react'
import { ItemConteiner } from './styles';
function ItemRepo() {
  return (
    <ItemConteiner>
      <h3>Garbiel</h3>
      <p>dio/Garbiel</p>
      <a href="#" > Ver repositório </a> <br/>
      <a href="#" className='remover'> remover </a>
      <hr/>
    </ItemConteiner>
  )
}
export default ItemRepo 