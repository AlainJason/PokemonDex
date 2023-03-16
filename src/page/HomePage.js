import React, { useState } from 'react';

import {AppContainer} from '../components_styled/Container.Style';

import Navbar from '../components/Navbar';
import PokemonList from '../components/PokemonList';
import Footer from '../components/Footer';
import PokemonData from '../components/PokemonData';



const HomePage = () => {
  const [pokeData, setPokeData] = useState();
  const [species,setSpecies] = useState();
  return (
    <div>
      <Navbar />
      <AppContainer>
        {/*<PokemonData 
          pokeData={pokeData}
          species={species}/>*/}
          <PokemonList 
          setPokeData={setPokeData}
          setSpecies={setSpecies}/>
      </AppContainer>
      <Footer /> 
    </div>

  )
}

export default HomePage