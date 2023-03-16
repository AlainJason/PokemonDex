import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';

import { GetPokemonsList } from '../api/api';
import { PokemonContainer} from '../components_styled/PokemonCard.Style';


function PokemonList({setPokeData,setSpecies}) {
  const [allPokemon, setAllPokemon] = useState([]);
  const [fetch, setFetch] = useState(true);
  const [loadMore, setLoadMore] = useState({
    limit: 18,
    offset: 0,
  });

  const fetchPokemon = async () => {
    const pokemon = await GetPokemonsList(loadMore);
    setAllPokemon(allPokemon.concat(pokemon));
    setFetch(false)
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
      document.getElementById("screen-component-className").removeEventListener('scroll', handleScroll);
    }
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[loadMore.offset]);

  useEffect(() => {
    setPokeData(allPokemon[0]);
  },[fetch])


  //setPokeData(allPokemon[0])
  return (
    <PokemonContainer id="screen-component-className">
      {allPokemon.map((pokemon) => (
        <PokemonCard 
          key={pokemon.id}
          pokemon={pokemon} 
          setPokeData={setPokeData}
          setSpecies={setSpecies}/>  
      ))}
    </PokemonContainer>
  );
}

export default PokemonList;
