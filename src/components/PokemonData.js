import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'

import PokemonDataTable from '../components/PokemonDataTable';
import PokemonStatsTable from './PokemonStatsTable';

import {GetPokemonSpeciesByName} from '../api/api'

const BTN = styled.button`
  background-color: blue; 
  border: solid .1rem;
  border-color: black;
  color: white;
  
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  
  //border-radius: 5px;
  cursor: pointer;
`
const ButtonDiv  = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

const ImgDiv = styled.div`
  //background-color: green;
`


const DataDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10%;

  align-items: center;
  justify-items: center;
  justify-self: center;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
  border-radius: .5rem;
  
  background-color: green;
  
  img {
    //max-width: 100%;
    //background-color: aqua;
  }
  @media (max-width: 950px) {
    //display: flex;
    flex-direction: column;
    //width: 100%;
  }
`;
const TestTTT = styled.div`
  background-color: aqua;
`;



const PokemonData = () => {
  const {pokemonName} = useParams();
  const [page, setPage] = useState({
    biography: true,
    states: false,
    evolutions: false
  })
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({
    name   : String,
    id     : String,
    imgsrc : String,
    types : {
      one : String,
      two : String
    },
    Species: String,
    Height : String,
    Weight : String,
    Abilities : {
      one : String, 
      two : String    
    },
    states : {
      hp        : String,
      attack    : String,
      defense   : String,
      special_A : String,
      special_D : String,
      speed     : String
    },
  })
  
  const fetch = async () => {
    const P = await GetPokemonSpeciesByName(pokemonName);

    console.log(P)
    setPokemon({
      name   : P[1].name,
      id     : P[1].id,
      imgsrc : P[1].sprites.other['official-artwork'].front_default,
      types : {
        one : P[1].types[0].type.name,
        two : P[1].types[1]?.type.name
      },
      Species: P[0].genera[7].genus,
      Height : P[1].height,
      Weight : P[1].weight,
      Abilities : {
        one : P[1].abilities[0].ability.name, 
        two : P[1].abilities[1]?.ability.name    
      },
      states : {
        hp        : P[1].stats[0].base_stat,
        attack    : P[1].stats[1].base_stat,
        defense   : P[1].stats[2].base_stat,
        special_A : P[1].stats[3].base_stat,
        special_D : P[1].stats[4].base_stat,
        speed     : P[1].stats[5].base_stat
      },
    })
    setLoading(false)
  }

  useEffect(() => {
    fetch()
  },[pokemonName])
  


  return (
        <DataDiv>
          <ImgDiv>
            <img src={pokemon.imgsrc} alt={`${pokemon.name} pic`} />
          </ImgDiv>
          <TestTTT>
            <ButtonDiv>
              <BTN onClick={() => setPage({
                biography: true,
                states: false,
                evolutions: false})}>
                biography
              </BTN>
              <BTN onClick={() => setPage({
                biography: false,
                states: true,
                evolutions: false})}>
                states
              </BTN>
            </ButtonDiv>
            {(page.biography) && <PokemonDataTable  pokemon={pokemon}/>}
            
            {(page.states) && <PokemonStatsTable pokemon={pokemon}/>}
          </TestTTT>
        </DataDiv>
  )
}

export default PokemonData