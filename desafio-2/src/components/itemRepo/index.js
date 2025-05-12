import React from 'react'
import { ItemConteiner } from './styles';
function ItemRepo({repo}) {
  return (
    <ItemConteiner>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target='_blank'> Ver repositório </a> <br/>
      <a href="#" className='remover'> remover </a>
      <hr/>
    </ItemConteiner>
  )
}
export default ItemRepo;