import React from "react";
import { useNavigate } from "react-router-dom";
import { PokemonCardSpan, StyledPokemon, PokemonCardSpanDiv, PokemonCardImgDiv} from "../components_styled/PokemonCard.Style"



const PokemonCard = (props) => {
  const { pokemon } = props;
  const navigate = useNavigate();

  const {front_default: imgsrc} = pokemon.sprites.other['official-artwork'];
  


  const pokemonCardOnclick = () =>{
    //navigate("/"+ pokemon.name)
    document.getElementById(props.scroll).removeEventListener('scroll', props.handleScroll);
  }


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