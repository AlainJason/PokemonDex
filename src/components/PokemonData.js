import React, { Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'

import PokemonDataTable from '../components/PokemonDataTable';
import PokemonStatsTable from './PokemonStatsTable';

import {GetPokemonSpeciesByName} from '../api/api'
import { PokemonTypeColors } from '../TypeColor'


function Loading() {
  return <h2>🌀 Loading...</h2>;
}

const BTN = styled.button`
  background-color: white;
  
  border: 0;
  color: black;
  
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  ${props => props.clicking === true && `
    border-bottom: solid .1rem;
    border-color: red;
    font-weight: 600;
  `}

`
const ButtonDiv  = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 30% 30%;
  gap: 20%;
`

const ImgDiv = styled.div`
  max-width: 100%;
`


const DataDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  align-items: center;
  //justify-items: center;
  //justify-self: center;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
  border-radius: .5rem;
  
  overflow-y: auto;
  overflow-x: hidden;

  background-color: #CDCDB9;

  img {
    max-width: 100%;
  } 
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
const DataRightSide = styled.div`
  background-color: white;

  //display: grid;
  //position: relative;
  width: 100%;
  min-height: 100%;

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
  console.log(pokemon.types.one)


  return (
    <>
    {loading ? (<Loading />) : 
    (
      <DataDiv inputColor = {pokemon.types.one}>
        <ImgDiv>
          <img src={pokemon.imgsrc} alt={`${pokemon.name} pic`} />
        </ImgDiv>
          <DataRightSide>
            <ButtonDiv>
              <BTN onClick={() => setPage({
                biography: true,
                states: false,
                evolutions: false})}
                clicking={page.biography}>
                biography
              </BTN>
              <BTN onClick={() => setPage({
                biography: false,
                states: true,
                evolutions: false})}
                clicking={page.states}>
                states
              </BTN>
            </ButtonDiv>
            {(page.biography) && <PokemonDataTable  pokemon={pokemon}/>}
            
            {(page.states) && <PokemonStatsTable pokemon={pokemon}/>}
          </DataRightSide>
      </DataDiv>
    )}
    </>

  )
}

export default PokemonData
