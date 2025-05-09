import gitLogo from '../assets/githubBranca.png';
import Input from '../components/input/index';
import Button from '../components/button/index';
import ItemRepo from '../components/itemRepo';
import { useState } from 'react';
import api from '../services/api';

import { Conteiner } from './styles';


function App() {

  const [currentRepo, setCurrentRepo] = useState(""); 
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = api.get(`repos/${currentRepo}`);
    
    if (data.id){
      setRepos = (prev => [...prev, data]);
    }

  }

  return (
    <Conteiner className="App">
      <img src={gitLogo} width={72} height={72} alt='github logo'/>
      <Input/>
      <Button/>
      <ItemRepo/>

    </Conteiner>
  );
}

export default App;
