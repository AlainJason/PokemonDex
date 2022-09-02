import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import PokemonProfile from './PokemonProfile' 


const Pokemon = (props) => {
  const {pokemon} = props;
  let navigate = useNavigate();
  function cclick(e){
    navigate('/'+pokemon.id);
  }
  

  return (
    <div className='pokemon' name={pokemon.name} onClick={cclick}>
      <img src={pokemon.sprites.front_default} alt="" />
      <div className='pokemon_imf'>
        <small>#0{pokemon.id}</small>
        <h4>{pokemon.name}</h4>
      </div>
      <div className='pokemon_type_container' > 
        {pokemon.types.map((type, index) => {
            return(
                <span key={type.type.name}className={type.type.name+" pokemon_type"}>{type.type.name}</span>
            )
        })}        
      </div>
    </div>
  )
}

export default  Pokemon
