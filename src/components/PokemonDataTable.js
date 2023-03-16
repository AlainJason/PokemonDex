import React from 'react'
import { TableContainer, DataTable, TableTd} from '../components_styled/Table.Styled'
import {PokemonCardSpan} from '../components_styled/PokemonCard.Style'
const PokemonDataTable = (props) => {
  const {P} = props;
  
  return (
    <TableContainer>
      <h2>{P.name}</h2>
      <DataTable>
        <tbody>
          <tr>
            <th>National №</th>
            <TableTd><strong>{P.id}</strong></TableTd>
          </tr>
          <tr>
            <th>Type</th>
            <TableTd>
              <PokemonCardSpan inputColor = {P.types.one}>
                {P.types.one}
              </PokemonCardSpan>
              <PokemonCardSpan inputColor = {P.types.two}>
                {P.types.two}
              </PokemonCardSpan>
            </TableTd>
          </tr>
          <tr>
            <th>Species</th>
            <TableTd>{P.Species}</TableTd>
          </tr>
          <tr>
            <th>Height</th>
            <TableTd>{P.Height}</TableTd>
          </tr>
          <tr>
            <th>Weight</th>
            <TableTd>{P.Weight}</TableTd>
          </tr>
          <tr>
            <th>Abilities</th>
            <TableTd>
              <h5>
                {P.Abilities.one}
              </h5>
              <h5>
                {P.Abilities.two}
              </h5>
            </TableTd>
          </tr>
        </tbody>
      </DataTable>
    </TableContainer>
  )
}

export default PokemonDataTable