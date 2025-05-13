import React from 'react'
import { ItemConteiner } from './styles';

function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  }

  return (
    <ItemConteiner onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target='_blank'> Ver repositório </a> <br />
      <a href="#" rel="noreferrer" className="remover"> remover </a>
      <hr />
    </ItemConteiner>
  )
}
export default ItemRepo;