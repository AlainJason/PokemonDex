import React from "react";
import { PokemonCardSpan, StyledPokemon, PokemonCardSpanDiv, PokemonCardImgDiv} from "../components_styled/PokemonCard.Style"
import { GetPokemonSpeciesByName } from '../api/api'


const PokemonCard = (props) => {
  const { pokemon } = props;
  const {front_default: imgsrc} = pokemon.sprites.other['official-artwork'];
 


  const pokemonCardOnclick = () =>{
    console.log(pokemon.name)
    props.setPokeData(pokemon)
    species(pokemon.name)
  }
  const species = async(name) => {
    const S = await GetPokemonSpeciesByName(name);
    props.setSpecies(S[0]);
  } 


  //console.log(pokemon)
  return (
    <StyledPokemon onClick={pokemonCardOnclick}>
      <PokemonCardImgDiv inputColor = {pokemon.types[0].type.name}>
        { pokemon.id < 10 ? (<p>#0{pokemon.id}</p>) : (<p>#{pokemon.id}</p>)}
        <img src={imgsrc} alt={`${pokemon.name} pic`} />
      </PokemonCardImgDiv>
      <h4>{pokemon.name}</h4>
      <PokemonCardSpanDiv>
        {pokemon.types.map((type) => (
          <PokemonCardSpan 
            inputColor = {type.type.name}
            key={type.type.name}
          >
            {type.type.name}
          </PokemonCardSpan>
        ))}
      </PokemonCardSpanDiv>


    </StyledPokemon>
  )

};

export default PokemonCard;