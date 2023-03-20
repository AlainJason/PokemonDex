import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';

import { GetPokemonsList } from '../api/api';
import { PokemonContainer} from '../components_styled/PokemonCard.Style';


function PokemonList() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState({
    limit: 18,
    offset: 0,
  });

  const fetchPokemon = async () => {
    const pokemon = await GetPokemonsList(loadMore);
    setAllPokemon(allPokemon.concat(pokemon));
  };

  function handleScroll() {
    const diff = this.scrollHeight - this.scrollTop;
    if (diff > this.clientHeight + 1){
      return;
    } 
    setLoadMore({
      limit: 18,
      offset: loadMore.offset + 18
    })
  };

  useEffect(() => {
 
    fetchPokemon();
      document.getElementById("screen-component-className").addEventListener('scroll', handleScroll);
    
    return () => {
      
    }
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[loadMore.offset]);
  return (
    <PokemonContainer id="screen-component-className">
      {allPokemon.map((pokemon) => (
        <PokemonCard 
          key={pokemon.id}
          pokemon={pokemon} 
          scroll={"screen-component-className"}
          handleScroll={handleScroll}/>  
      ))}
    </PokemonContainer>
  );
}

export default PokemonList;
