import React, { useEffect, useState} from 'react'
import './PokemonProfile.css'
import { useNavigate, useParams } from "react-router-dom";
import { GetEachPokemonFromApi } from '../api';
const PokemonProfile = () => {
    let { pokemonID } = useParams();
    const [pokemon,setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;


    const ppp = async () =>{
        setLoading(true);
        const eachPokemon = await GetEachPokemonFromApi(url);

        setPokemon(eachPokemon)
        console.log(eachPokemon)
        setLoading(false);
    }
    useEffect(() => {
        ppp();
      },[])

    return (
        <div>
          {loading ? (
            <h1>Loading pokemones...</h1>
          ) : (
          <div className='pokemon_profile'>
            <div className='pokemon_profilen' >
                <small>#0{pokemon.id}</small>
                <h4>{pokemon.name}</h4>
                <img src={pokemon.sprites.front_default} alt="" />
                <div className='pokemon_type_container2' > 
                {pokemon.types.map((type, index) => {
                    return(
                        <span key={type.type.name}className={type.type.name+" pokemon_type"}>{type.type.name}</span>
                    )
                })}        
            </div>
            </div>
            <div>
                <h4>{pokemon.name}</h4>
                <h4>{pokemon.name}</h4>
                <h4>{pokemon.name}</h4>
                <h4>{pokemon.name}</h4>
                <h4>{pokemon.name}</h4>
            </div>
          </div>
          
          )}
        </div>
      )
}

export default PokemonProfile