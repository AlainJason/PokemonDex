import React from 'react'
import styled from 'styled-components';
import { TableContainer2, DataTable, Barchart ,TableTd} from '../components_styled/Table.Styled'

const calMinMax = (name , stats) => {
  if(name === 'hp'){
    const max = stats * 2 + 204;
    const min = stats * 2 + 110;
    return [min, max];  
  }
  else{
    const max = (stats * 2 + 99) * 1.1;
    const min = (stats * 2 + 5) * 0.9;
    return [min, max];  
  }
}


const PokemonStatsTable = (props) => {
  const  P  = props.pokemon
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
          <TableTd>{Math.floor(calMinMax("hp", P.states.hp)[0])}</TableTd>
          <TableTd>{Math.floor(calMinMax("hp", P.states.hp)[1])}</TableTd>
        </tr>
        <tr>
          <th>Attack</th>
          <td>{P.states.attack}</td>
          <Barchart state={P.states.attack}>
            <div></div>
          </Barchart>
          <TableTd>{Math.floor(calMinMax("Attack", P.states.attack)[0])}</TableTd>
          <TableTd>{Math.floor(calMinMax("Attack", P.states.attack)[1])}</TableTd>
        </tr>
        <tr>
          <th>Defense</th>
          <td>{P.states.defense}</td>
          <Barchart state={P.states.defense}>
            <div></div>
          </Barchart>
          <TableTd>{Math.floor(calMinMax("Defense", P.states.defense)[0])}</TableTd>
          <TableTd>{Math.floor(calMinMax("Defense", P.states.defense)[1])}</TableTd>
        </tr>
        <tr>
          <th>SP.Atk</th>
          <td>{P.states.special_A}</td>
          <Barchart state={P.states.special_A}>
            <div></div>
          </Barchart>
          <TableTd>{Math.floor(calMinMax("special_A", P.states.special_A)[0])}</TableTd>
          <TableTd>{Math.floor(calMinMax("special_A", P.states.special_A)[1])}</TableTd>
        </tr>
        <tr>
          <th>SP.Def</th>
          <td>{P.states.special_D}</td>
          <Barchart state={P.states.special_D}>
            <div></div>
          </Barchart>
          <TableTd>{Math.floor(calMinMax("special_D", P.states.special_D)[0])}</TableTd>
          <TableTd>{Math.floor(calMinMax("special_D", P.states.special_D)[1])}</TableTd>
        </tr>
        <tr>
          <th>Speed</th>
          <td>{P.states.speed}</td>
          <Barchart state={P.states.speed}>
            <div></div>
          </Barchart>
          <TableTd>{Math.floor(calMinMax("speed", P.states.speed)[0])}</TableTd>
          <TableTd>{Math.floor(calMinMax("speed", P.states.speed)[1])}</TableTd>
        </tr>
        <tr>
          <th>Total</th>
          <td>
            <strong>
            {P.states.hp + 
               P.states.attack + 
               P.states.defense + 
               P.states.special_A +
               P.states.special_D +
               P.states.speed}
            </strong>
          </td>
          <Barchart>
          </Barchart>
          <TableTd><strong>Min</strong></TableTd>
          <TableTd><strong>Max</strong></TableTd>
        </tr>
      </tbody>

      
      </DataTable>

      <p>The ranges shown on the right are for a level 100 Pokémon. 
        Maximum values are based on a beneficial nature, 252 EVs, 
        31 IVs; minimum values are based on a hindering nature, 0 EVs, 0 IVs.
      </p>  
  

             
  </TableContainer2>
  )
}

export default PokemonStatsTable