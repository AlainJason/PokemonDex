import React from 'react'
import { TableContainer2, DataTable, Barchart} from '../components_styled/Table.Styled'
const PokemonStatsTable = (props) => {
  const {P} = props;
  return (
    <TableContainer2>
    <h2>Base states</h2>
      <DataTable>
      <tbody>                  
        <tr>
          <th>HP</th>
          <td>{P.states.hp}</td>
          <Barchart state={P.states.hp}>
            <div></div>
          </Barchart>
        </tr>
        <tr>
          <th>Attack</th>
          <td>{P.states.attack}</td>
          <Barchart state={P.states.attack}>
            <div></div>
          </Barchart>
        </tr>
        <tr>
          <th>Defense</th>
          <td>{P.states.defense}</td>
          <Barchart state={P.states.defense}>
            <div></div>
          </Barchart>
        </tr>
        <tr>
          <th>SP.attack</th>
          <td>{P.states.special_A}</td>
          <Barchart state={P.states.special_A}>
            <div></div>
          </Barchart>
        </tr>
        <tr>
          <th>SP.Defense</th>
          <td>{P.states.special_D}</td>
          <Barchart state={P.states.special_D}>
            <div></div>
          </Barchart>
        </tr>
        <tr>
          <th>Speed</th>
          <td>{P.states.speed}</td>
          <Barchart state={P.states.speed}>
            <div></div>
          </Barchart>
        </tr>
      </tbody>
      </DataTable>               
  </TableContainer2>
  )
}

export default PokemonStatsTable