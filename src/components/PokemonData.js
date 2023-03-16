import React from 'react'
import styled from 'styled-components'

import PokemonDataTable from '../components/PokemonDataTable';
import PokemonStatsTable from './PokemonStatsTable';



const DataDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  width:90%;
  margin: auto;
  justify-content: center;
  
  img {
    max-width: 100%;
  }
`;



const PokemonData = (pokemon) => {
  
  //console.log(pokemon.species)

  if(pokemon.pokeData && pokemon.species) {
    const P = {
      name   : pokemon.pokeData.name,
      id     : pokemon.pokeData.id,
      imgsrc : pokemon.pokeData.sprites.other['official-artwork'].front_default,
      types : {
        one : pokemon.pokeData.types[0].type.name,
        two : pokemon.pokeData.types[1]?.type.name
      },
      Species: pokemon.species.genera[7].genus,
      Height : pokemon.pokeData.height,
      Weight : pokemon.pokeData.weight,
      Abilities : {
        one : pokemon.pokeData.abilities[0].ability.name, 
        two : pokemon.pokeData.abilities[1]?.ability.name    
      },
      states : {
        hp        : pokemon.pokeData.stats[0].base_stat,
        attack    : pokemon.pokeData.stats[1].base_stat,
        defense   : pokemon.pokeData.stats[2].base_stat,
        special_A : pokemon.pokeData.stats[3].base_stat,
        special_D : pokemon.pokeData.stats[4].base_stat,
        speed     : pokemon.pokeData.stats[5].base_stat
      },

    }

    return (
      <DataDiv>
        <img src={P.imgsrc} alt={`${P.name} pic`} />
        <PokemonDataTable  P={P}/>
        <PokemonStatsTable P={P}/> 
      </DataDiv>
    )
  }
}

export default PokemonData