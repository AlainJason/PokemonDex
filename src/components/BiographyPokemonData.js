import React from 'react'
import { TableContainer, DataTable, TableTd} from '../components_styled/Table.Styled'
import {PokemonCardSpan, PokemonCardSpanDiv} from '../components_styled/PokemonCard.Style'
import {PokemonID} from './PokemonID'
import styled from 'styled-components'



const BiographyPokemonData = ({pokemon}) => {
  const  P  = pokemon;


  console.log(P.localNo[0])
  return (
    <div>
      <h2>Pokédex Data</h2>
      <DataTable>
        <tbody>
          <tr>
            <th>National №</th>
            <TableTd>{PokemonID(P.id)}</TableTd>
          </tr>
          <tr>
            <th>Type</th>
            <TableTd>
              <PokemonCardSpanDiv>
                <PokemonCardSpan inputColor={P.types.one}>
                  {P.types.one}
                </PokemonCardSpan>
                {P.types.two && <PokemonCardSpan inputColor={P.types?.two}>
                  {P.types?.two}
                </PokemonCardSpan>}
              </PokemonCardSpanDiv>
            </TableTd>
          </tr>
          <tr>
            <th>Species</th>
            <TableTd>{P.Species}</TableTd>
          </tr>
          <tr>
            <th>Height</th>
            <TableTd>{P.Height/10} m</TableTd>
          </tr>
          <tr>
            <th>Weight</th>
            <TableTd>{P.Weight/10} kg</TableTd>
          </tr>
          <tr>
            <th>Abilities</th>
            <TableTd>
              <h4>
                {P.Abilities.one}
              </h4>
              {P.Abilities.two && <h5>
                {P.Abilities.two}(Hidden ability)
              </h5>}
            </TableTd>
          </tr>
          <tr>
            <th>Local №</th>
            <TableTd>
              {Object.values(P.localNo).map((number) => (
                <p>
                  {PokemonID(number.entry_number)}
                  <small> ({number.pokedex.name})</small>
                </p>
              ))}
            </TableTd>
          </tr>
        </tbody>
      </DataTable>
    </div>
  )
}

export default BiographyPokemonData