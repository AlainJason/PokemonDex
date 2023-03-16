import React from 'react';
import styled from 'styled-components';
import {PokemonTypeColors} from '../TypeColor'

const NavbarDiv = styled.div`
    background: linear-gradient(
    -45deg,
    ${PokemonTypeColors.fire.light},
    ${PokemonTypeColors.fire.medium}
    90%);
  height: 10vh;
  
  
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: .2em;
  font-size: 2.75rem;
  font-weight: normal;
  text-transform: capitalize;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 70%);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
`

const navbar = () => {
  return (
    <NavbarDiv>
      Pokédex
    </NavbarDiv>
  )
}

export default navbar