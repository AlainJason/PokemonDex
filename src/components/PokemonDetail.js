import React, { Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'

import PokemonDetailBiography from './PokemonDetailBiography';
import PokemonDetailStats from './PokemonDetailStats';

import {GetPokemonSpeciesByName} from '../api/api'
import { PokemonTypeColors } from '../TypeColor'


function Loading() {
  return <h2>🌀 Loading...</h2>;
}

const BTN = styled.button`
  background-color: white;
  
  border: 0;
  color: black;
  
  padding: 10px;
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
  display: flex;
  flex-direction: column;
  
  p {
    letter-spacing: .3em;
    font-weight: 600;
    color:rgba(0,0,0,0.5);
    font-size: 1.5rem;
    text-transform: capitalize;
    margin-left: 10px;
  }  
  @media (max-width: 950px) {
    margin-top: 5%;
    flex-direction: column;
  }
  
`


const DataDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
  border-radius: .5rem;

  
  background: linear-gradient(
    0.5turn,
    ${ props => PokemonTypeColors[props.inputColor].light},
    ${ props => PokemonTypeColors[props.inputColor].medium}); 
    
  img {
    max-width: 100%;
  } 
  @media (max-width: 950px) {
    margin-top: 5%;
    flex-direction: column;
  }
`;
const DataRightSide = styled.div`
  background-color: white;
  width: 100%;
  border: solid 5px;
  @media (max-width: 950px) {
    width: auto;
  }
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
    localNo : {},
    eggGroup: {},
    captureRate: String,
    baseHappiness: String,
    growthRate: String,
    baseExperience: String,
    hatchCounter: String,
    genderRate: String
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
      localNo :{...P[0].pokedex_numbers,},
      eggGroup:{...P[0].egg_groups},
      captureRate: P[0].capture_rate,
      baseHappiness: P[0].base_happiness,
      growthRate: P[0].growth_rate.name,
      baseExperience: P[1].base_experience,
      hatch_counter: P[0].hatch_counter,
      genderRate: P[0].gender_rate
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
          <p>{pokemon.name}</p>
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
            {(page.biography) && <PokemonDetailBiography  pokemon={pokemon}/>}
            
            {(page.states) && <PokemonDetailStats pokemon={pokemon}/>}
          </DataRightSide>
      </DataDiv>
    )}
    </>

  )
}

export default PokemonData
