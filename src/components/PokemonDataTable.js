import React from 'react'
import { TableContainer, DataTable, TableTd} from '../components_styled/Table.Styled'
import {PokemonCardSpan, PokemonCardSpanDiv} from '../components_styled/PokemonCard.Style'

import {PokemonID} from '../components/PokemonID'

const PokemonDataTable = ({pokemon}) => {
  const  P  = pokemon
  return (
    <TableContainer>
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
              <p>
                {P.Abilities.one}
              </p>
              {P.Abilities.two && <p>
                {P.Abilities.two} (Hidden ability)
              </p>}
            </TableTd>
          </tr>
        </tbody>
      </DataTable>
    </TableContainer>
  )
}

export default PokemonDataTable