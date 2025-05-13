import gitLogo from '../assets/githubBranca.png';
import Input from '../components/input/index';
import Button from '../components/button/index';
import ItemRepo from '../components/itemRepo';
import { useState } from 'react';
import { api } from '../services/api';

import { Conteiner } from './styles';


function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {

      const isExiste = repos.find(repo => repo.id === data.id);

      if (!isExiste) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }
    }
    alert('Repositorios não encontrado')
  }

  const handleRemoveRepo = (id) => {
    const updatedRepos = repos.filter(repo => repo.id !== id);
    setRepos(updatedRepos);
  };

  return (
    <Conteiner className="App">
      <img src={gitLogo} width={72} height={72} alt='github logo' />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />

      {repos.map(repo => (
        <ItemRepo key={repo.id} repo={repo} handleRemoveRepo={handleRemoveRepo} />
      ))}

    </Conteiner>
  );
}

export default App;
